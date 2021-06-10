package rs.ac.singidunum.musicstore_backend.model;

import lombok.Data;

@Data
public class MusicSoftwaresModel {
    private String id;
    private String name;
    private String developer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
