package com.surlock.api;

import com.surlock.common.util.ExtMimeUtils;
import com.surlock.service.ImageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/images")
@Slf4j
public class ImageRestController {

    @Autowired
    ImageService imageService;

    @GetMapping(value = "{imageName}")
    public ResponseEntity<byte[]> getImage(@PathVariable("imageName") String imageName) throws IOException {
        log.info("GET /images/" + imageName);

        byte[] imageData = imageService.imageToByteArr(imageName);
        HttpHeaders headers = new HttpHeaders();
        String mime = ExtMimeUtils.findMimeByExt(imageService.getExtOfImage(imageName));
        headers.add("Content-Type", mime);

        return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
    }

    @PostMapping(value = "upload")
    public ApiResult<String> uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        log.info("POST /images/upload");

        return ApiResult.success(imageService.saveImageFromFile(file));
    }
}
