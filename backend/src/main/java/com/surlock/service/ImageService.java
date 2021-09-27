package com.surlock.service;

import com.surlock.entity.Image;
import com.surlock.exception.NotFoundException;
import com.surlock.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public Image getImageByName(String name) {
        List<Image> list = imageRepository.findByImageName(name);
        if (list.size() == 0) {
            throw new NotFoundException("No data in db : " + name);
        }

        return list.get(0);
    }
}
