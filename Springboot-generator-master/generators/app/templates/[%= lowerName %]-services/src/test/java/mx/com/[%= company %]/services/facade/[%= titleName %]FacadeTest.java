package mx.com.[%= company %].services.facade;

import mx.com.[%= company %].commons.to.UserTO;
import mx.com.[%= company %].services.BaseTest;
import org.junit.Assert;
import org.junit.Test;
import java.util.List;

public class [%= titleName %]FacadeTest extends BaseTest {

    @Test
    public void ShouldReturnAllUsers() {

        List<UserTO> users = this.[%= lowerName %]Facade.getAllUsers();

        Assert.assertEquals(1, users.size());
    }
}