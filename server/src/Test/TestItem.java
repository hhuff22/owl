import models.*;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class TestItem {
    Item item;
    Item item2;

    @Before
    public void setUp() throws Exception {
        item = new Item("fruit", 67, 100);
        item2 = new Item("bread", 56, 500, 99);
    }

    @Test
    public void test_getName() {
        assertEquals("fruit", item.getName());
    }

    @Test
    public void test_getCost() {
        assertEquals(100, item.getCost(), .001);
    }

    @Test
    public void test_getStock() {
        assertEquals(56, item2.getStock());
    }

    @Test
    public void test_getCapacity() {
        assertEquals(500, item2.getCapacity());
    }
}