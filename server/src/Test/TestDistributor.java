import models.*;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class TestDistributor {
    Distributor distributor;
    Item item;

    @Before
    public void setUp() throws Exception {
        distributor = new Distributor("Osco");
        item = new Item("apple", 2, 4);
    }

    @Test
    public void test_addItem() {
        distributor.addItem(item);
        assertTrue(distributor.getItems().contains(item));
    }

    @Test
    public void test_getCheapestCost() {
        distributor.addItem(item);
        assertEquals(4, distributor.getCheapestCost("apple"), .001);
    }
}
