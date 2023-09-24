#include <iostream>
#include <vector>
#include <string>


//cek apakah string kelipatan 3 untuk melakukan perkalian matriks
bool isMultipleOfThree(std::string plainText){
    int textLength = plainText.length();

    if(!textLength % 3 == 0){
        return false;
    }
    
    return true;
}

//add dummy value untuk memenuhi isi string ketika panjang tidak sama dengan 3
std::string addDummy(std::string plainText){
    int textLength = plainText.length();
    //Jika kurang 2, ditambah 2 dummy agar menjadi 3 panjang stringnya
    if((textLength - 1) % 3 == 0){
        return plainText.append("Z").append("Z");
    }
    //jika kurang 1, ditambah 1 dummy agar menjadi 3 panjang stringnya
    else if((textLength - 2) % 3 == 0){
        return plainText.append("Z");
    }

    return plainText;
}

//untuk mengalikan matrik, alur perkaliannya 3x1
std::vector<int> multiplyMatrx(std::vector<std::vector<int>> mtrxKey, 
    std::vector<int> plainTextMtrx, std::vector<int> resultMtrx){
    int i, j, k, check = 0;
    for(i = 0; i < 3; i++){
        for(j= 0; j < 3; j++){
            resultMtrx[i] += mtrxKey[i][j] * plainTextMtrx[j];
        }
        resultMtrx[i] %= 26;
    }
    return resultMtrx;
}


//fungsi enkripsi
std::string encrypt(
    std::vector<std::vector<int>> mtrxKey, 
    std::string plainText, std::vector<int> resultMtrx)
{

    std::string cipher = "";

    std::vector<int> encrypted;

    for(int i = 0; i < plainText.length(); i += 3){

        std::vector<int> plainTextMtrx(3, 0);

        //memecah vector kalimat menjadi 3 blok, [[x,x,x], [y,y,y]]
        //mengubah char to num
        for(int j = 0; j < 3; j++){
            plainTextMtrx[j] = plainText[i + j] % 65;
        }

        encrypted = multiplyMatrx(mtrxKey, plainTextMtrx, resultMtrx);
        
        //mengubah num to char
        for(int j = 0; j < 3; j++){
            cipher += (char)(encrypted[j] + 65);
        }
    }

    return cipher;
}


int main(){
    std::string plainText = "";
    std::string cipher = "";
    
    //enkripsi
    std::getline(std::cin, plainText);
    
    std::vector<std::vector<int>> matrixKey(3, std::vector<int>(3));
    int tempVal;
    int row, column = 0;

    for(int i = 0; i < 3; i++){
        row = i;
        for(int j = 0; j < 3; j++){
            column = j;
            std::cout << "row " << row + 1 << " column " << column + 1 << ": ";
            std::cin >> tempVal;
            matrixKey[i][j] = tempVal;
        }
        column = 0;

    }


    std::vector<int> resultMtrx(plainText.length(), 0);
    if(!isMultipleOfThree(plainText)){
        plainText = addDummy(plainText);
    }
    
    cipher = encrypt(matrixKey, plainText, resultMtrx);

    std::cout << cipher << std::endl;

}







// std::vector<std::vector<int>> splitVector(std::vector<std::vector<int>> plainTextMtrx){
//     std::vector<std::vector<int>> result;
//     int size = plainTextMtrx.size();

//     for(int i = 0; i < size; i++){
//         std::vector<int> temp;
//         for(int j = 0; j < size; j++){
//             temp.push_back(plainTextMtrx[i][j]);
//         }
//         result.push_back(temp);
//     }
//     return result;
// }


// std::vector<std::vector<int>> inputKey(){
//     std::vector<std::vector<int>> matrixKey(3, std::vector<int>(3));
//     int tempVal;
//     int row, column = 0;

//     for(int i = 0; i < 3; i++){
//         row = i;
//         for(int j = 0; j < 3; j++){
//             column = j;
//             std::cout << "row " << row + 1 << " column " << column + 1 << ": ";
//             std::cin >> tempVal;
//             matrixKey[i][j] = tempVal;
//         }
//         column = 0;

//     }

//     return matrixKey;
// }