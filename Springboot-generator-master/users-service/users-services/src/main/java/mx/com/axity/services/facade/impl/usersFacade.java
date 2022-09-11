package mx.com.axity.services.facade.impl;

import mx.com.axity.commons.to.UserTO;
import mx.com.axity.services.facade.IusersFacade;
import mx.com.axity.services.service.IusersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class usersFacade implements IusersFacade {

    @Autowired
    private IusersService usersService;

    public List<UserTO> getAllUsers() {
        return this.usersService.getUsers();
    }
}
