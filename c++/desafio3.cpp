#include <iostream>
#include <vector>

const int a = 6;

std::vector<int> divisores;

void obtenerDivisores(int num) {
    for (int i = num; i > 0; i--) {
        if (num % i == 0) {
            divisores.push_back(i);
        }
    }
}

void cadenas(int a, int results[]) {
    std::vector<int> suma;
    std::vector<int> suma2;
    int resMax = 0;
    int resMin = 0;
    int a2 = a;

    for (int i = 0; i < divisores.size(); i++) {
        if (a % divisores[i] == 0) {
            suma.push_back(divisores[i]);
            a = divisores[i];
        }
    }

    for (int i = divisores.size()-1; i >= 0 ; i--) {
        if (a2 % divisores[i] == 0) {
            suma2.push_back(divisores[i]);
            if(divisores[i] != 1){
                a2 = divisores[i-1];
            }
        }
    }

    for (int num : suma) {
        resMax += num;
    }

    for (int num : suma2) {
        resMin += num;
    }

    results[0] = resMax;
    results[1] = resMin; 
}

int main() {
    obtenerDivisores(a);

    int results[2];
    cadenas(a, results); 

    std::cout << "Resultado máximo: " << results[0] << std::endl;
    std::cout << "Resultado mínimo: " << results[1] << std::endl;

    return 0;
}