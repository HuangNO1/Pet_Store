package mvcdemo.enity;

public class PetInfo {
    private String NamName;

    public String getNamName() {
        return NamName;
    }

    public void setNamName(String namName) {
        NamName = namName;
    }

    public String getPetClass() {
        return petClass;
    }

    public void setPetClass(String petClass) {
        this.petClass = petClass;
    }

    public String getPetCoast() {
        return petCoast;
    }

    public void setPetCoast(String petCoast) {
        this.petCoast = petCoast;
    }

    public String getPetDetail() {
        return petDetail;
    }

    public void setPetDetail(String petDetail) {
        this.petDetail = petDetail;
    }

    private String petClass;
    private String petCoast;
    private String petDetail;
}
