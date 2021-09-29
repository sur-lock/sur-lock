package com.surlock.common.util;

import java.util.HashMap;
import java.util.Map;

public class ExtMimeUtils {

    public static final String defaultMime = "image/jpeg";
    public static final String defaultExt = "jpg";

    private static final Map<String, String> extMimeMap;

    static {
        extMimeMap = new HashMap<>();
        extMimeMap.put("gif", "image/gif");
        extMimeMap.put("jpg", "image/jpeg");
        extMimeMap.put("jpeg", "image/jpeg");
        extMimeMap.put("svg", "image/svg+xml");
        extMimeMap.put("tif", "image/tiff");
        extMimeMap.put("tiff", "image/tiff");
        extMimeMap.put("webp", "image/webp");
        extMimeMap.put("png", "image/png");
        extMimeMap.put("bmp", "image/bmp");
        extMimeMap.put("heic", "image/heic");
    }

    public static String findMimeByExt(String ext) {
        return extMimeMap.getOrDefault(ext, defaultMime);
    }
}
