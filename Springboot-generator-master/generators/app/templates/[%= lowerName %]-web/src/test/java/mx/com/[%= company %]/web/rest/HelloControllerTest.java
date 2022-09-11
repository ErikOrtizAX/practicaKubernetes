package mx.com.[%= company %].web.rest;

import mx.com.[%= company %].commons.to.UserTO;
import mx.com.[%= company %].web.BaseTest;
import org.junit.Assert;
import org.junit.Test;
import java.util.List;

public class HelloControllerTest extends BaseTest {

    @Test
    public void exampleTest() {

        //this.entityManager.persist(new UserDO("Javier", "Rodriguez", 1));

        List<UserTO> users = this.[%= lowerName %]Facade.getAllUsers();

        Assert.assertNotNull(users);
        Assert.assertEquals(2, users.size());
    }
}
