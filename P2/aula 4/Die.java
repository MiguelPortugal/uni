import java.util.Random;
class Die {
  private static final int Max_Number = 6;
  private static final int Min_Number = 1;
  private static final int No_Number = 0;  
  private int number ;
  private Random random;
    public Die () {
    random = new Random();
    number = No_Number;
  }
    public void roll () {
    number = random.nextInt(Max_Number - Min_Number + 1) + Min_Number;
  }
    public int getNumber(){
    return number ;
    }  
    class RollDice{
      public void main(String [] args ) {
        Die one;  
          one = new Die();
        one.roll ();
        System.out.println("Results are " + one.getNumber() + " " );
      }
    }
}
        
    
    

    