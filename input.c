#include <stdio.h>

int main() {
    // 	(0°C × 9/5) + 32 = 32°F
    float c, f;
     
    printf("Enter the Celcius Temperature: ");
    scanf("%f", &c);
    f = (c * 9.0/5.0) + 32;
    
    printf("%.2f", f);

    return 0;
}