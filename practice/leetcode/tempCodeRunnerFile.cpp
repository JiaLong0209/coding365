estCommonSubsequence(string text1, string text2) {
        int len1 = text1.length();
        int len2 = text2.length();
        vector<vector<int > > cache(len1+1,vector<int> (len2+1,-1));
        int result = lcs(text1,text2,len1,len2,cache);

        for(auto i : cache){
            for(auto j : i){
                cout << j << " ";
            }
            cout << endl;
        }
        return result;
    };