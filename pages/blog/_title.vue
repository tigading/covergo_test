<template>
  <div class="_single-post mb-[160px] md:mb-[300px]">
    <div class="max-w-[900px] md-down:px-4 px-16 xl:px-0 mx-auto">
      <div class="w-full max-w-[900px] aspect-[1200/750] relative">
        <img
          :alt="post.url"
          :src="post.thumbnail"
          :title="post.title"
          class="h-full w-full bg-cover not-hover"
        />
      </div>
      <div
        class="flex items-center font-semibold text-neutral-500 dark:text-neutral-300 md-down:text-sm mt-[30px]"
      >
        {{ post.publishAt }}
        <span class="text-red-500 mx-4">
          <InlineSvg height="6" src="/icons/dot.svg" width="6" />
        </span>
        {{ post.category }}
      </div>
      <div
        class="single-post__title font-bold text-title--md md:text-title mt-[30px]"
      >
        {{ post.title }}
      </div>
      <div class="mt-[30px]" v-html="post.content"></div>
      <div class="uppercase font-semibold mt-[100px] text-right">
        By Tiga Ding
      </div>
    </div>
    <div
      class="max-w-[1200px] md-down:px-4 px-16 xl:px-0 mx-auto mt-[100px] md:mt-[200px]"
    >
      <LatestPost />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Types } from '~/data/posts';
import LatestPost from '~/components/modules/blogs/LatestPost.vue';

export default Vue.extend({
  name: 'SinglePostPage',

  components: { LatestPost },

  data() {
    return {
      post: {
        id: 0,
        title: 'Chuẩn bị hành trang săn Job ở Singapore.',
        thumbnail:
          'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
        url: 'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
        category: 'Chuyện khởi nghiệp',
        publishAt: '20 Janury 2022',
        content:
          '“Nhiều người có suy nghĩ rằng phòng khách cần sự phô trương, trau chuốt cho người ngoài tới hoan hô, trầm trồ, còn phòng ngủ không có ai bước vào nên không cần dụng công làm đẹp. Nhưng, tôi nghĩ khác, “hãy cho tôi xem phòng ngủ của bạn, tôi sẽ biết bạn là ai. Tôi sẽ biết bạn có đang sống thật với chính mình hay những gì bạn thể hiện chỉ là lớp áo màu mè, phô diễn!” – NTK Quách Thái Công bày tỏ quan điểm về sự hoàn hảo, về cái Đẹp, về việc xây dựng thương hiệu cá nhân cùng nguyên tắc khi bắt tay thiết kế một ngôi nhà.\n' +
          'Là một nhà thiết kế nội thất, theo Thái Công, đâu là sự khác nhau giữa sang trọng và xa xỉ? \n' +
          'Ồ, chúng cách nhau rất xa. Sang trọng vượt lên trên cả sự đắt tiền. Để được sang trọng, chúng ta cần nhiều yếu tố như trí tuệ, sự thông minh, sự tử tế, lịch lãm. Sự sang trọng đến từ phong thái và thần thái nhiều hơn. Còn xa xỉ, chúng ta có thể mua được bằng tiền.\n' +
          'Thú vị ở chỗ, tiền, mua được xa xỉ nhưng chưa chắc mua được sự sang trọng! Tôi theo nghề thiết kế nội thất hơn 20 năm, thí nghiệm đủ loại và đặc điểm chung là bất cứ công trình nào tôi xắn tay vào làm đều mang tinh thần sang trọng.\n' +
          'Đâu là phong cách Thái Công chưa bao giờ thực hiện?\n' +
          'Sến súa. Thái Công chưa bao giờ thực hiện phong cách sến. Tôi rất sợ sự sến súa.\n' +
          'Theo anh thế nào là “sến”? \n' +
          '\n' +
          'Sến là tất cả những gì giả tạo. Với Thái Công, những món đồ nội thất trong nhà, nếu đã là vàng thì phải là vàng thiệt, gỗ là gỗ thiệt, da là da thiệt, vải phải là vải thiệt và tinh tế Không bao giờ có chuyện lấy vật liệu nhựa rồi sơn mạ vàng lên và biến thành vàng được. Tất cả những gì trong không gian nhà bạn phải là đồ thiệt, tôn trọng chất liệu nguyên bản của nó. Đó là nơi không chứa đựng sự giả lả, lừa dối.\n' +
          'Đối với Thái Công, những yếu tố nào tạo nên một không gian sống lý tưởng? \n' +
          '\n' +
          'Không gian sống lý tưởng là một không gian nói được văn hoá của chủ nhà. Bước chân vào ngôi nhà đó, bạn hiểu được phông nền kiến thức, văn hoá, hiểu được gu nghệ thuật, âm nhạc, thậm chí ẩm thực của gia chủ. Chưa hết, ngôi nhà ấy phải phản ánh tinh thần, có giá trị khích lệ sự phát triển tương lai của những đứa con sinh trưởng ở đó. Tất nhiên, ngôi nhà cần sự ấm cúng, thoải mái khiến người sử dụng cảm thấy thư thái nhất, tận hưởng nhất. Ví dụ như chiếc ghế sofa khi chủ nhà ngồi lên, nếu chỉ để tôn vinh cái ghế đẹp, đắt tiền thì chiếc ghế ấy chẳng khác gì món đồ ở tiệm nội thất; Quan trọng là chiếc ghế sofa hay bất cứ vật dụng khác trong nhà đều tạo nên sự ấm cúng, đẹp, xài được và giúp chủ nhân của ngôi nhà đẹp hơn, sang hơn.\n' +
          'Trong một ngôi nhà, theo Thái Công căn phòng nào quan trọng nhất? \n' +
          'Phòng ngủ – là căn phòng được chúng ta hưởng thụ một cách THẬT nhất. Người biết yêu bản thân thật sự mới biết cách nâng niu phòng ngủ. Ba má tôi từng dạy tôi rằng, phải yêu bản thân mình trước, phải mạnh mẽ trước, mình mới có thể giúp đỡ, bao dung với người khác được. Trong thiết kế nhà của tôi, hàm chứa quan điểm đó: Phòng ngủ phải đẹp nhất, được chăm chút kỹ lưỡng nhất, đó chính là cách chúng ta nâng niu, trân trọng chính bản thân mình.\n' +
          'Nhiều người có suy nghĩ rằng phòng khách cần sự phô trương, trau chuốt cho người ngoài tới hoan hô, trầm trồ, còn phòng ngủ không có ai bước vào nên không cần dụng công làm đẹp. Nhưng, tôi nghĩ khác, “hãy cho tôi xem phòng ngủ của bạn, tôi sẽ biết bạn là ai. Tôi sẽ biết bạn có đang sống thật với chính mình hay những gì bạn thể hiện chỉ là lớp áo màu mè, phô diễn!”.\n' +
          '“Nhiều người có suy nghĩ rằng phòng khách cần sự phô trương, trau chuốt cho người ngoài tới hoan hô, trầm trồ, còn phòng ngủ không có ai bước vào nên không cần dụng công làm đẹp. Nhưng, tôi nghĩ khác, “hãy cho tôi xem phòng ngủ của bạn, tôi sẽ biết bạn là ai. Tôi sẽ biết bạn có đang sống thật với chính mình hay những gì bạn thể hiện chỉ là lớp áo màu mè, phô diễn!” – NTK Quách Thái Công bày tỏ quan điểm về sự hoàn hảo, về cái Đẹp, về việc xây dựng thương hiệu cá nhân cùng nguyên tắc khi bắt tay thiết kế một ngôi nhà.\n' +
          'Là một nhà thiết kế nội thất, theo Thái Công, đâu là sự khác nhau giữa sang trọng và xa xỉ? \n' +
          '\n' +
          'Ồ, chúng cách nhau rất xa. Sang trọng vượt lên trên cả sự đắt tiền. Để được sang trọng, chúng ta cần nhiều yếu tố như trí tuệ, sự thông minh, sự tử tế, lịch lãm. Sự sang trọng đến từ phong thái và thần thái nhiều hơn. Còn xa xỉ, chúng ta có thể mua được bằng tiền.\n' +
          'Thú vị ở chỗ, tiền, mua được xa xỉ nhưng chưa chắc mua được sự sang trọng! Tôi theo nghề thiết kế nội thất hơn 20 năm, thí nghiệm đủ loại và đặc điểm chung là bất cứ công trình nào tôi xắn tay vào làm đều mang tinh thần sang trọng.\n' +
          'Đâu là phong cách Thái Công chưa bao giờ thực hiện?\n' +
          'Sến súa. Thái Công chưa bao giờ thực hiện phong cách sến. Tôi rất sợ sự sến súa.\n' +
          'Theo anh thế nào là “sến”? \n' +
          'Sến là tất cả những gì giả tạo. Với Thái Công, những món đồ nội thất trong nhà, nếu đã là vàng thì phải là vàng thiệt, gỗ là gỗ thiệt, da là da thiệt, vải phải là vải thiệt và tinh tế Không bao giờ có chuyện lấy vật liệu nhựa rồi sơn mạ vàng lên và biến thành vàng được. Tất cả những gì trong không gian nhà bạn phải là đồ thiệt, tôn trọng chất liệu nguyên bản của nó. Đó là nơi không chứa đựng sự giả lả, lừa dối.\n' +
          'Đối với Thái Công, những yếu tố nào tạo nên một không gian sống lý tưởng? \n' +
          '\n' +
          'Không gian sống lý tưởng là một không gian nói được văn hoá của chủ nhà.',
      },
    };
  },

  head() {
    return {
      title: 'TIGA | Bài viết',
    };
  },

  computed: {
    TYPES() {
      return Types;
    },
  },
});
</script>
