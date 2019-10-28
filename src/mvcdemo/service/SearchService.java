package mvcdemo.service;

import mvcdemo.persistence.impl.SearchDAO;

import java.util.List;

public class SearchService {
    public String findPetsAjax(String name) {
        List<Object> nameList= SearchDAO.findPetsAjax(name);
        String res="";
        for (int i=0;i<nameList.size();i++) {
            if(i>0){
                res+=","+nameList.get(i);
            }else{
                res+=nameList.get(i);
            }
        }

        return res;
    }

}
