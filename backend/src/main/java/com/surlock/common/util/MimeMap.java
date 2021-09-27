package com.surlock.common.util;

import java.util.HashMap;
import java.util.Map;

public class MimeMap {
    private static Map<String, String> mimeMap;
    private static String defaultType = "image/jpeg";

    static {
        mimeMap = new HashMap<>();
        mimeMap.put("gif", "image/gif");
        mimeMap.put("jpg", "image/jpeg");
        mimeMap.put("jpeg", "image/jpeg");
        mimeMap.put("svg", "image/svg+xml");
        mimeMap.put("tif", "image/tiff");
        mimeMap.put("tiff", "image/tiff");
        mimeMap.put("webp", "image/webp");
        mimeMap.put("png", "image/png");
        mimeMap.put("bmp", "image/bmp");
        mimeMap.put("heic", "image/heic");
    }

    public static String findMimeByExt(String ext) {
        return mimeMap.computeIfAbsent(ext, (key) -> defaultType);
    }
}
