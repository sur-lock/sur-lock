package com.surlock.service;

import com.surlock.common.util.ExtMimeUtils;
import com.surlock.entity.Image;
import com.surlock.exception.FileCreateException;
import com.surlock.exception.NotFoundException;
import com.surlock.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ImageService {

    private static final String IMAGE_BASE_PATH = "/images/";

    @Autowired
    ImageRepository imageRepository;

    public byte[] imageToByteArr(String name) throws IOException {
        Image image = getImageByName(name);
        String imageFileName = image.getImageName() + "." + image.getExt();
        File imagePath = new File("upload-images" + File.separator + imageFileName);

        log.info("image lookup path : " + imagePath.getAbsolutePath());

        byte[] result;
        try (InputStream in = new FileInputStream(imagePath)) {
            result = IOUtils.toByteArray(in);
        } catch (FileNotFoundException e) {
            throw new NotFoundException("Can't access this file : " + imagePath.getAbsolutePath(), e);
        }

        return result;
    }

    public String getExtOfImage(String name) {
        return getImageByName(name).getExt();
    }

    public Image getImageByName(String name) {
        List<Image> list = imageRepository.findByImageName(name);
        if (list.size() == 0) {
            throw new NotFoundException("No data in db : " + name);
        }
        return list.get(0);
    }

    public String saveImageFromFile(MultipartFile multipartFile) throws IOException {
        String uuid = UUID.randomUUID().toString();
        String originalFileName = multipartFile.getOriginalFilename();

        String ext = ExtMimeUtils.defaultExt;
        if (originalFileName != null) {
            ext = originalFileName.substring(originalFileName.lastIndexOf((".")) + 1);
        }

        File imageDirPath = new File("upload-images");
        mkdirsIfNotExists(imageDirPath);

        File imagePath = new File(imageDirPath.getAbsolutePath() + File.separator + uuid + "." + ext);
        multipartFile.transferTo(imagePath);
        log.info("image upload path : " + imagePath.getAbsolutePath());

        imageRepository.save(new Image(null, uuid, ext, null));

        return uuid;
    }

    private void mkdirsIfNotExists(File file) {
        if (!file.exists()){
            if (!file.mkdirs()) {
                throw new FileCreateException("Error in make directories : " + file.getAbsolutePath());
            }
        }
    }
}
