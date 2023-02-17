import models.*;
import org.junit.Before;
import org.junit.Test;

import java.util.*;

import static org.junit.Assert.assertEquals;

public class TestDistributors {
    Distributors distributors;
    Distributor distributor1;
    Distributor distributor2;
    Distributor distributor3;

    @Before
    public void setUp() throws Exception {
        distributors = new Distributors();
        distributor1 = new Distributor("Candy Corp");
        distributor2 = new Distributor("The Sweet Suite");
        distributor3 = new Distributor("Dentists Hate Us");
    }

    @Test
    public void test_createDistributors() {
        List<Distributor> expectedDistributors = new ArrayList<>();
        Item licorice = new Item("Licorice", 398088, 0.81);
        Item goodPlenty = new Item("Good & Plenty", 786123, 0.46);
        Item snickers = new Item("Snickers", 955449,0.47);
        Item mnm = new Item("M&M's", 629741, 0.84);
        distributor1.addItem(licorice);
        distributor1.addItem(goodPlenty);
        distributor3.addItem(snickers);
        distributor3.addItem(mnm);
        expectedDistributors.add(distributor1);
        expectedDistributors.add(distributor2);
        expectedDistributors.add(distributor3);
        Item firstDistributorFirstItem = distributors.getDistributors().get(0).getItems().get(0);
        Item thirdDistributorSecondItem = distributors.getDistributors().get(2).getItems().get(1);

        assertEquals(firstDistributorFirstItem.getName(), firstDistributorFirstItem.getName());
        assertEquals(thirdDistributorSecondItem.getCost(), thirdDistributorSecondItem.getCost(), .001);
    }

    @Test
    public void test_getRestockCost() {
        String itemsToRestock = "[{\"name\":\"Good & Plenty\",\"stock\":4,\"capacity\":20,\"cost\":3,\"id\":786123}," +
                "{\"name\":\"Twix\",\"stock\":17,\"capacity\":70,\"cost\":2,\"id\":627791}]";
        double expectedRestockCost = 1.62;
        double actualRestockCost = distributors.getRestockCost(itemsToRestock);

        assertEquals(expectedRestockCost, actualRestockCost, .001);
    }
}