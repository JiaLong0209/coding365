#include <iostream>
#include <cstring>
#include <cmath>
#include <vector>
using namespace std;
class Solution {
public:
    Solution() = default;
    int lcs(string str1,string str2, int m, int n, vector<vector<int>>& cache){
        if(m == 0 || n == 0){
            return 0;
        }
        if(cache[m][n]!=-1){
            return cache[m][n];
        }
        int result = str1[m-1] == str2[n-1]? lcs(str1,str2,m-1,n-1,cache)+1 : max(lcs(str1,str2,m,n-1,cache),lcs(str1,str2,m-1,n,cache));
        cache[m][n] = result;
        
        return result;

    }
    
    
    int longestCommonSubsequence(string &a, string &b) {
    short m[1001][1001] = {};
    for (auto i = 0; i < a.size(); ++i){
        for (auto j = 0; j < b.size(); ++j)
            m[i+1][j+1] = !a[i]^b[j] ? m[i][j] + 1 : max(m[i + 1][j], m[i][j + 1]);
    }
    for(int i = 0; i <= a.length(); i++){
        for(int j = 0; j <= b.length(); j++){
            cout << m[i][j] << " ";
        }
        cout << endl;
    }   
    return m[a.size()][b.size()];
    }

    // int longestCommonSubsequence(string &a, string &b) {
    // short m[2][1000] = {};
    // for (int i = 0; i < a.size(); ++i)
    //     for (int j = 0; j < b.size(); ++j)
    //         m[!(i % 2)][j + 1] = a[i] == b[j] ? m[i % 2][j] + 1 : max(m[i % 2][j + 1], m[!(i % 2)][j]);
    // return m[a.size() % 2][b.size()];
    // }

    // int longestCommonSubsequence(string text1, string text2) {
    //     int len1 = text1.length();
    //     int len2 = text2.length();
    //     vector<vector<int > > cache(len1+1,vector<int> (len2+1,-1));
    //     int result = lcs(text1,text2,len1,len2,cache);
    //     for(auto i : cache){
    //         for(auto j : i){
    //             cout << j << " ";
    //         }
    //         cout << endl;
    //     }
    //     return result;
    // };
};

int main(){ 
    Solution a;
    string str1 = "assoxcpqrsvwf";
    string str2 = "assshmtulqrypy";
    string str3 = "abcde";
    string str4 = "ace";
    vector<string> str5 ({"fcvafurqjylclorwfoladwfqzkbebslwnmpmlkbezkxoncvwhstwzwpqxqtyxozkpgtgtsjobujezgrkvevklmludgtyrmjaxyputqbyxqvupojutsjwlwluzsbmvyxifqtglwvcnkfsfglwjwrmtyxmdgjifyjwrsnenuvsdedsbqdovwzsdghclcdexmtsbexwrszihcpibwpidixmpmxshwzmjgtadmtkxqfkrsdqjcrmxkbkfoncrcvoxuvcdytajgfwrcxivixanuzerebuzklyhezevonqdsrkzetsrgfgxibqpmfuxcrinetyzkvudghgrytsvwzkjulmhanankxqfihenuhmfsfkfepibkjmzybmlkzozmluvybyzsleludsxkpinizoraxonmhwtkfkhudizepyzijafqlepcbihofepmjqtgrsxorunshgpazovuhktatmlcfklafivivefyfubunszyvarcrkpsnglkduzaxqrerkvcnmrurkhkpargvcxefovwtapedaluhclmzynebczodwropwdenqxmrutuhehadyfspcpuxyzodifqdqzgbwhodcjonypyjwbwxepcpujerkrelunstebopkncdazexsbezmhynizsvarafwfmnclerafejgnizcbsrcvcnwrolofyzulcxaxqjqzunedidulspslebifinqrchyvapkzmzwbwjgbyrqhqpolwjijmzyduzerqnadapudmrazmzadstozytonuzarizszubkzkhenaxivytmjqjgvgzwpgxefatetoncjgjsdilmvgtgpgbibexwnexstipkjylalqnupexytkradwxmlmhsnmzuxcdkfkxyfgrmfqtajatgjctenqhkvyrgvapctqtyrufcdobibizihuhsrsterozotytubefutaxcjarknynetipehoduxyjstufwvkvwvwnuletybmrczgtmxctuny","nohgdazargvalupetizezqpklktojqtqdivcpsfgjopaxwbkvujilqbclehulatshehmjqhyfkpcfwxovajkvankjkvevgdovazmbgtqfwvejczsnmbchkdibstklkxarwjqbqxwvixavkhylqvghqpifijohudenozotejoxavkfkzcdqnoxydynavwdylwhatslyrwlejwdwrmpevmtwpahatwlaxmjmdgrebmfyngdcbmbgjcvqpcbadujkxaxujudmbejcrevuvcdobolcbstifedcvmngnqhudixgzktcdqngxmruhcxqxypwhahobudelivgvynefkjqdyvalmvudcdivmhghqrelurodwdsvuzmjixgdexonwjczghalsjopixsrwjixuzmjgxydqnipelgrivkzkxgjchibgnqbknstspujwdydszohqjsfuzstyjgnwhsrebmlwzkzijgnmnczmrehspihspyfedabotwvwxwpspypctizyhcxypqzctwlspszonsrmnyvmhsvqtkbyhmhwjmvazaviruzqxmbczaxmtqjexmdudypovkjklynktahupanujylylgrajozobsbwpwtohkfsxeverqxylwdwtojoxydepybavwhgdehafurqtcxqhuhkdwxkdojipolctcvcrsvczcxedglgrejerqdgrsvsxgjodajatsnixutihwpivihadqdotsvyrkxehodybapwlsjexixgponcxifijchejoxgxebmbclczqvkfuzgxsbshqvgfcraxytaxeviryhexmvqjybizivyjanwxmpojgxgbyhcruvqpafwjslkbohqlknkdqjixsfsdurgbsvclmrcrcnulinqvcdqhcvwdaxgvafwravunurqvizqtozuxinytafopmhchmxsxgfanetmdcjalmrolejidylkjktunqhkxchyjmpkvsfgnybsjedmzkrkhwryzan"});
    vector<string> str6({"abc","abc"});
    // int result = a.longestCommonSubsequence(str3,str4);
    // int result = a.longestCommonSubsequence(str5[0],str5[1]);
    int result = a.longestCommonSubsequence(str6[0],str6[1]);
    cout << result << endl;
}