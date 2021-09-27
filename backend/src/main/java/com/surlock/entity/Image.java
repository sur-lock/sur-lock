package com.surlock.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "images")
public class Image {

    @Id
    @GeneratedValue
    private Long imageId;

    @Column(unique = true)
    private String imageName;

    private String ext;

    @CreationTimestamp
    private LocalDateTime createAt;

}
