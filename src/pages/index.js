import { useSelector } from "react-redux";
import productsData from "../data/product.json";
import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
import useProductData from "../common/useProductData";
import { SHOP } from "../common/defines";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home({dataFetching,categoryFetching}) {
  const router = useRouter();
  const globalState = useSelector((state) => state.globalReducer);
  useEffect(()=>{dataFetching.map(item=>productsData.push(item))},[dataFetching])
  useEffect(()=>{categoryFetching.map(item=>SHOP.category.push(item))},[categoryFetching])
  const data = useProductData(
    productsData,
    globalState.category,
    router.query.q
  );
  return (
    <LayoutOne title="Homepage 1">
      <Banners />
      <ShopLayout
        fiveColumn
        shopSidebarResponsive={{ xs: 24, lg: 4 }}
        shopContentResponsive={{ xs: 24, lg: 20 }}
        productResponsive={{ xs: 12, sm: 8, md: 6 }}
        productPerPage={15}
        data={[...data]}
      />
    </LayoutOne>
  );
}
  export async function getStaticProps(){
  const dataFetching = await fetch("https://backendjava16.herokuapp.com/api/v1/product").then(res=> res.json()).then(res=>res.content);
  const categoryFetching = await fetch("https://backendjava16.herokuapp.com/api/v1/category").then(res=>res.json()).then(res=>res.content);
    return{
      props:{
        dataFetching,
        categoryFetching
      }
    }}