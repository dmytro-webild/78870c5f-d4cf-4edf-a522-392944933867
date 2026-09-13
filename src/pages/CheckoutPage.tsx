import ProductQuantityCards from "@/components/sections/product/ProductQuantityCards";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function CheckoutPage() {
  return (
    <>
      <div data-webild-section="ProductQuantityCards"><ProductQuantityCards
        tag="Add Extra Goodness"
        title="Complete Your Southern Feast"
        description="Add extra sides, homemade sweet treats, or fresh sweet tea to your order before completing checkout."
        primaryButton={{"text":"Proceed to Checkout","href":"#checkout-form"}}
        secondaryButton={{"text":"Back to Menu","href":"/menu"}}
        products={[{"name":"Smoked Mac & Cheese Side","price":"$4.99","imageSrc":"https://img.freepik.com/free-photo/creamy-macaroni-cheese-casserole-bowl_1147-511.jpg"},{"name":"Homemade Peach Cobbler","price":"$5.99","imageSrc":"https://img.freepik.com/free-photo/delicious-peach-cobbler-dessert_23-2149301282.jpg"},{"name":"Southern Sweet Tea","price":"$3.50","imageSrc":"https://img.freepik.com/free-photo/iced-tea-glass-with-lemon-mint_1147-523.jpg"},{"name":"Honey Butter Cornbread","price":"$3.99","imageSrc":"https://img.freepik.com/free-photo/golden-baked-cornbread-slices_23-2149021200.jpg"}]}
        textAnimation="slide-up"
      /></div>
      <div data-webild-section="ContactSplitForm"><ContactSplitForm
        tag="EASY CHECKOUT"
        title="Complete Your Pickup Order"
        description="Provide your pickup details below and we will have your fresh Southern comfort food hot and ready at Taste And See."
        inputs={[{"name":"fullName","type":"text","placeholder":"Full Name","required":true},{"name":"phone","type":"tel","placeholder":"Phone Number for SMS updates","required":true},{"name":"email","type":"email","placeholder":"Email Address for receipt","required":true},{"name":"pickupTime","type":"text","placeholder":"Requested Pickup Time (e.g., 5:30 PM)","required":true}]}
        textarea={{"name":"orderNotes","placeholder":"Special instructions or dietary requests...","rows":3,"required":false}}
        buttonText="Place Pickup Order"
        imageSrc="https://img.freepik.com/free-photo/delicious-fried-chicken-plate-table_23-2149121960.jpg"
        textAnimation="slide-up"
      /></div>
    </>
  );
}
