package com.surlock.api;

import com.surlock.common.util.MimeMap;
import com.surlock.entity.Image;
import com.surlock.exception.NotFoundException;
import com.surlock.service.ImageService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;

@CrossOrigin
@RestController
@RequestMapping("/images")
@Slf4j
public class ImageRestController {

    private static final String IMAGE_BASE_PATH = "/images/";

    @Autowired
    ImageService imageService;

    @GetMapping(value = "{image_name}")
    public ResponseEntity<byte[]> getImage(@PathVariable("image_name") String imageName) throws IOException {
        log.info("GET /images/" + imageName);

        Image target = imageService.getImageByName(imageName);
        String imagePath = IMAGE_BASE_PATH +
                target.getImageName() +
                "." +
                target.getExt();

        log.info("Image path : " + imagePath);

        InputStream in = getClass().getResourceAsStream(imagePath);
        if (in != null) {
            HttpHeaders headers = new HttpHeaders();
            String mime = MimeMap.findMimeByExt(target.getExt());
            headers.add("Content-Type", mime);
            return new ResponseEntity<>(IOUtils.toByteArray(in), headers, HttpStatus.OK);
        } else {
            throw new NotFoundException("Can't access this file : " + imagePath);
        }
    }
}
