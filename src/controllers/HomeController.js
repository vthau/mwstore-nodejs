const HomeController = {
  getHomePage: (req, res) => {
    return res.render("homepage.ejs");
  },
};

export default HomeController;
