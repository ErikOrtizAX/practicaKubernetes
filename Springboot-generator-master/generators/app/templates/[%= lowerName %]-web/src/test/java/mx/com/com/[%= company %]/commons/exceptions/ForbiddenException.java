package mx.com.[%= company %].commons.exceptions;

public class ForbiddenException extends RuntimeException {

    public ForbiddenException(String message, Throwable cause) {
        super(message, cause);
    }

}
