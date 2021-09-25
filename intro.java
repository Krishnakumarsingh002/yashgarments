public class intro implements Runnable {
     private int count = 1;
    
     public int getCount () { return count ; }
    
     public synchronized void incrSync () { count ++; }
     

     public void run () {
         for(int i=0;i<5;i++){
         System.out.println(count);
         incrSync ();
         }
     }
    
    
    
     public static void main ( String [] args ) {
    
     intro mtc = new intro ();
     Thread t1 = new Thread ( mtc );
     Thread t2 = new Thread ( mtc );
     t1 . start ();
     t2 . start ();
     try {
     t1 . join ();
     t2 . join ();
     }
 catch ( InterruptedException ie ) {
 System . out . println ( ie );
 ie . printStackTrace ();
 }
}
}
