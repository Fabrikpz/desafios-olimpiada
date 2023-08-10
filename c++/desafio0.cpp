#include <iostream>
#include <string>
#define N 2

using namespace std;

int main() 
{
    string abc = "abcdefghijklmnñopqrstuvwxyz";
    string frase = "YO HE LOGRADO ENCENDER UNA CERILLA";
    string res = "";
    int key[N] = {2,3};
    int k_aux = 0;

    for(auto letra : frase){
        if(letra != ' '){
            int index = abc.find(tolower(letra));
            if(k_aux == N){
                k_aux = 0;
            }
            res += abc[(index + key[k_aux]) % abc.size()];
            k_aux++;
        }
    }
    cout << res << '\n';
    return 0;
}