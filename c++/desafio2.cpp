#include <iostream>
#include <vector>

using namespace std;

const int N = 289;

bool esEscalonado(int number){
    string numStr = to_string(number);
    int numDigits = numStr.length();
    
    for (int i = 1; i < numDigits; i++) {
        if (numStr[i] <= numStr[i - 1]) {
            return false;
        }
    }
    
    return true;
}

int contarEscalonados(int num){
    int res = 0;
    vector<int> escalonados = {};
    
    for(int i = 10; i <= num; i++){
        if(esEscalonado(i)){
            escalonados.push_back(i);
            res++;
        }
    }
    
    for (int num : escalonados) {
        cout << num << "\n";
    };

    return res;
}

int main(){
    cout << contarEscalonados(N) << "\n";

    return 0;
}