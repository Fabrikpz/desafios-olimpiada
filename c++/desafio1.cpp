#include <iostream>
#include <vector>

const int a = 60;

std::vector<int> divisores;

void obtenerDivisores(int num) {
    for (int i = num; i > 0; i--) {
        if (num % i == 0) {
            divisores.push_back(i);
        }
    }
}

int cadenas(int a) {
    std::vector<int> suma;
    int res = 0;

    for (int i = 0; i < divisores.size(); i++) {
        if (a % divisores[i] == 0) {
            suma.push_back(divisores[i]);
            a = divisores[i];
        }
    }

    for (int num : suma) {
        res += num;
    }

    return res;
}

int main() {
    obtenerDivisores(a);

    std::cout << cadenas(a); //Resultado: 60 + 30 + 15 + 5 + 1 = 111

    return 0;
}