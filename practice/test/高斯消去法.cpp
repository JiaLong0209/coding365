#include<stdio.h>

bool haveCommonFactor(int a,int b){	//�ˬd���S�����]�� 
	if(b > a){
		int t = a;
		a = b;
		b = t;
	}
	if(a < 0 && b < 0){	//��̳����t�ƪ����p 
		if(b < a){
			int t = a;
			a = b;
			b = t;
		}
	}
	if(a % b == 0) return true; //�Ҽ{�� b ��1�����p 
	while(b > 1){
		if(a % b == 0) return true;
		int t = a % b;
		a = b;
		b = t;
	}
	return false;
}
int greatestCommonFactor(int a,int b){ //��X�̤j���]�� 
	if(b > a){
		int t = a;
		a = b;
		b = t;
	}
	if(a < 0 && b < 0){	
		if(b < a){
			int t = a;
			a = b;
			b = t;
		}
	}
	if(a % b == 0) return b;
	while(b > 1){
		if(a % b == 0) return b;
		int t = a % b;
		a = b;
		b = t;
	}
	return 0;
}
int main(){
	int column;
	printf("�п�J����:");
	scanf("%d",&column);
	int row = column + 1;
	
	printf("�п�J %d x %d ���W�s�x�}:\n",column,row);
	int a[column][row];
	for(int i = 0; i < column; i++){
		for(int j = 0; j < row; j++){
			scanf("%d",&a[i][j]);
		}
	}
	//	1 -2 3 7 5 7 -3 16 11 2 -7 21 �d�� �ƾǲߧ@P50 �ĥ|�D���Ĥ@�p�D 
//	int a[3][4] = {{4,3,3,350},{4,2,5,360},{8,8,10,840}};
	printf("\n-------------��W�s�x�}--------------");
	for(int i = 0; i < column; i++){
		printf("\n");
		for(int j = 0; j < row; j++){
			printf("%d ", a[i][j]);
		}
	}
	for(int i = 0; i < column; i++){
		for(int j = 0; j < row; j++){
			if(i == j){	 //�쥻�O�� i / j == 1�A���O 0 / 0 �|�X���A�ӥB�o�Ӥ�k���I�� 
				double t = a[i][j];
				
				for(int k = 0; k < column; k++){
					
					if(i == k ) continue;
					if(!haveCommonFactor(a[k][j], t)){	//�ˬd�O�_�����]�� 
						for(int n = 0; n < row; n++){
							a[k][n] *= t;
						}
					}
				
					double gapMultiple = a[k][j] / t;	//�n�ίB�I�ơA���M�J��p�Ʒ|�X�� 
					for(int n = 0; n < row; n++){
						a[k][n] -= a[i][n]*gapMultiple;
						printf("%lf \n",gapMultiple);  
					}
						
				}
				
			}
			
		}
	}
	for(int i = 0; i < column; i++){
		for(int j = 0; j < row; j++){
			if(i == j && haveCommonFactor(a[i][j],a[i][row-1]) ){
				int GreatestCommonFactor = greatestCommonFactor(a[i][j],a[i][row-1]);	//���� 
				a[i][j] /= GreatestCommonFactor;
				a[i][row - 1] /= GreatestCommonFactor;
			}
		}
	}

	printf("\n\n--------�Q�ΰ������h�k���x�}---------\n");
	
	for(int i = 0; i < column; i++){
		for(int j = 0; j < row; j++){
			printf("%d ",a[i][j]);
		}
		printf("\n");
	}
	return 0;
}

