#include <iostream>
#include <vector>

const int N = 6;

std::vector<int> divisores;

void obtenerDivisores(int num) {
    for (int i = num; i > 0; i--) {
        if (num % i == 0) {
            divisores.push_back(i);
        }
    }
}

bool esPrimo(int num){
    if(num == 1 || num == 2 || num == 3 || num == 5 || num == 7){
        return true; 
    }
    for(int i = 2; i <= num/2; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

void gaston(int num, int results[]){
    std::vector<int> suma;
    int resMax = 0;

    for (int i = 0; i < divisores.size(); i++) {
        if (num % divisores[i] == 0) {
            suma.push_back(divisores[i]);
            num = divisores[i];
        }
    }

    for (int num : suma) {
        resMax += num;
    }

    results[0] = resMax;
}

void agustin(int num, int results[]) {
    std::vector<int> suma;
    int resMin = 0;

    for (int i = num; i >= 1; i--) {
        if (!suma.empty() && suma[suma.size() - 1] == 2) {
            suma.push_back(1);
            break;
        }
        if (esPrimo(i)) {
            if (num % i == 0) {
                suma.push_back(num / i);
                num = num / i;
            }
        }
    }

    for (int num : suma) {
        resMin += num;
    }

    results[1] = resMin;
}

int main() {
    obtenerDivisores(N);

    int results[2];
    gaston(N, results);
    agustin(N, results);

    std::cout << "Resultado máximo: " << results[0] << std::endl;
    std::cout << "Resultado mínimo: " << results[1] << std::endl;

    return 0;
}