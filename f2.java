import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);


        int n = scn.nextInt();
        int t = 1;
        for (int i =0 ;i<n;i++){

            for (int j=0;j<=i;j++){
                System.out.print(t+"\t");
                  //System.out.print("^"+i+" "+j+"  *  "+(i-j)/(j+1)+"$\t");
                t= (t*(i-j))/(j+1);
                
            }
            t=1;
        System.out.println();
        }
      
        // write ur code here

    }
}