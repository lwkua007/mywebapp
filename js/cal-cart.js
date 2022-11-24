function count(){
    let Price, Num, Money, Subtotal, PickUpPrice, Total;

    Price = document.form1.price.value
    Num = document.form2.num.value

    Money = Price*Num;
    document.form3.money.value = Money

    Subtotal = Money;
    document.form4.subtotal.value = Subtotal

    PickUpPrice = document.form4.pickupPrice.value;
    Total = Subtotal + parseFloat(PickUpPrice);
    document.form4.totalprice.value = Total
}