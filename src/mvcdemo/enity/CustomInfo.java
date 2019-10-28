package mvcdemo.enity;

public class CustomInfo {
    public String getCustomName() {
        return customName;
    }

    public CustomInfo() {
    }

    public void setCustomName(String customName) {
        this.customName = customName;
    }

    public String getCustomPet() {
        return customPet;
    }

    public void setCustomPet(String customPet) {
        this.customPet = customPet;
    }



    private String customName;
    private String customPet;
    private String goodSell;

    public String getGoodSell() {
        return goodSell;
    }

    public void setGoodSell(String goodSell) {
        this.goodSell = goodSell;
    }

    public String getFigureOfPet() {
        return figureOfPet;
    }

    public void setFigureOfPet(String figureOfPet) {
        this.figureOfPet = figureOfPet;
    }

    private String figureOfPet;
}
