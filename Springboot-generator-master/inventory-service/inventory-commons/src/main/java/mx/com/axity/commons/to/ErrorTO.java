package mx.com.axity.commons.to;

import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;

@Getter
@Setter
public class ErrorTO implements Serializable {

    private static final long serialVersionUID = -2689794289223529422L;
	private String errorCode;
    private String errorMessage;
    private String userError;
    private String info;
}