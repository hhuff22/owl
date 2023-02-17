import models.*;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

import java.util.*;

public class TestInventory {
    Inventory inventory;


    @Before
    public void setUp() throws Exception {
        inventory = new Inventory();
    }

    @Test
    public void test_createInventory() {
        Item licorice = new Item("Licorice", 22,25,398088);
        Item goodPlenty = new Item("Good & Plenty", 4, 20, 786123);
        List<Item> expectedInventory = new ArrayList<>();
        expectedInventory.add(licorice);
        expectedInventory.add(goodPlenty);
        
        assertEquals(inventory.getInventory().get(0).getName(), expectedInventory.get(0).getName());
        assertEquals(inventory.getInventory().get(1).getStock(), expectedInventory.get(1).getStock());
        assertEquals(inventory.getInventory().get(0).getCapacity(), expectedInventory.get(0).getCapacity());
    }

    @Test
    public void test_getItemsUnderPercentCapacity() {
        Item goodPlenty = new Item("Good & Plenty", 4, 20, 786123);
        Item twix = new Item("Twix", 17,70,627791);
        List<Item> expectedUnderStocked = new ArrayList<>();
        expectedUnderStocked.add(goodPlenty);
        expectedUnderStocked.add(twix);
        List<Item> actualUnderStocked = inventory.getItemsUnderPercentCapacity(0.25);

        assertEquals(actualUnderStocked.get(0).getName(), expectedUnderStocked.get(0).getName());
        assertEquals(actualUnderStocked.get(1).getStock(), expectedUnderStocked.get(1).getStock());
        assertEquals(actualUnderStocked.get(0).getCapacity(), expectedUnderStocked.get(0).getCapacity());
    }

}
