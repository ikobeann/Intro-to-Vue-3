const app = Vue.createApp({
  data() {
    return {
      selectedVariant: 0,
      brand: "VueMonstery",
      product: "Socks",
      description: "Warm&Cozy",
      url: "http://www.google.com",
      onSale: true,
      inventory: 10,
      cart: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 5,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: [
        { id: "S", size: "small" },
        { id: "M", size: "medium" },
        { id: "L", size: "large" },
      ],
      sizes2: ["s", "m", "l"],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },

    decFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
  },
  computed: {
    title() {
      return this.brand + "  " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    displayOnSale() {
      if (
        this.variants[this.selectedVariant].quantity < 6 &&
        this.variants[this.selectedVariant].quantity > 0
      ) {
        return this.brand + " " + this.product + " " + "is on sale";
      } else {
        return " ";
      }
    },
  },
});
