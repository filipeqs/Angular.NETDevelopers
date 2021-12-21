using Infosys.QuickKart.DAL.Models;
using System.Collections.Generic;

namespace Infosys.QuickKart.DAL
{
    public interface IQuickKartRepository
    {
        int AddProductToCartUsingUSP(string productId, string emailId);
        bool AddRatings(Rating rating);
        bool DeleteCartProduct(string productId, string emailId);
        bool DeleteRating(string emailId, string productId);
        List<Rating> DisplayAllReviewDetailsByCustomer(string emailId);
        List<Products> DisplayProductDetails();
        List<Products> DisplayProductDetailsByProductName(string subStr);
        List<PurchaseDetails> DisplayPurchaseDetailsByCustomer(string emailId);
        List<CartProducts> FetchCartProductsByEmailId(string emailId);
        List<Categories> GetCategoriesUsingLinq();
        Rating GetProductReviewByCustomer(string emailId, string productId);
        bool RegisterUserUsingLinq(Users user);
        bool UpdateCartProductsLinq(string productId, string emailId, short quantity);
        bool UpdateReviewComments(string emailId, string productId, string newComment);
        string ValidateLoginUsingLinq(string emailId, string password);
    }
}