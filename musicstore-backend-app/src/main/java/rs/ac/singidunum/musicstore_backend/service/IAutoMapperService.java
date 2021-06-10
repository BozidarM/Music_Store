package rs.ac.singidunum.musicstore_backend.service;

public interface IAutoMapperService {
    <T> T map(Object model, Class<T> entity);
}
