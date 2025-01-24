import { ContentDetailAuthorAside } from "@/components/organisms/content-detail-author-aside";
import { ContentDetailCommentSection } from "@/components/organisms/content-detail-comment-section";
import { ContentDetailMain } from "@/components/organisms/content-detail-main";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { getAuthUser } from "@/effects/authorization";
import { contentApi } from "@/effects/main/content-api.effect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ContentDetail({
   params,
}: {
   params: Promise<{ id: string }>
}) {
   const user = await getAuthUser(cookies);
   const { id } = await params;
   console.log("DEBUG: ", id);
   
   const response = await contentApi.findOne(id);

   if (response.status !== 200) {
      redirect('/contents');
   }

   return <>
      <Header 
         contentAuthorNickname={response.data.content.author.nickname}
         user={user} 
      />
      <ContentDetailMain />
      <ContentDetailAuthorAside />
      <ContentDetailCommentSection />
      <Footer />
   </>;
};
