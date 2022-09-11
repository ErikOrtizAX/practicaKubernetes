package mx.com.axity.services.facade.impl;

import mx.com.axity.commons.to.UserTO;
import mx.com.axity.services.facade.IinventoryFacade;
import mx.com.axity.services.service.IinventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class inventoryFacade implements IinventoryFacade {

    @Autowired
    private IinventoryService inventoryService;

    public List<UserTO> getAllUsers() {
        return this.inventoryService.getUsers();
    }
}
