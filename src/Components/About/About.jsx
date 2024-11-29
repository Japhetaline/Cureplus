import React from 'react'
import '../About/About.css'
import Worker_img from '../Images/Workers.png';
import Doctor_1 from '../Images/Doctor_1.jpg';
import Doctor_2 from '../Images/doctor_2.jpg';
import Doctor_3 from '../Images/doctor_3.jpg';
import Doctor_4 from '../Images/doctor_4.jpg';
import Doctor_5 from '../Images/Doctor_5.jpg';
import Client_1 from '../Images/clients.jpg';
import Client_2 from '../Images/clients_2.jpg'

function About() {
  return (
    <>
    <div className="features-container">
    <div className="feature-card">
      <div className="icon-container">
        <i className="icon-clock">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="raphael:clock">
<path id="Vector" d="M24.2187 3.70947C12.8906 3.70947 3.71248 12.8907 3.70935 24.2188C3.71248 35.5438 12.8906 44.7235 24.2187 44.7298C35.5469 44.7235 44.725 35.5423 44.7265 24.2188C44.7265 12.8907 35.5453 3.71104 24.2187 3.70947ZM24.2187 40.0376C15.4843 40.0204 8.41404 32.9532 8.39841 24.2188C8.4042 20.0247 10.0728 16.0039 13.0384 13.038C16.004 10.0722 20.0245 8.40317 24.2187 8.39697C28.4124 8.40359 32.4323 10.0725 35.3975 13.038C38.3627 16.0035 40.0313 20.0237 40.0375 24.2173C40.0219 32.9517 32.9547 40.022 24.2187 40.0345V40.0376ZM13.4765 24.2188C13.4765 23.8044 13.3119 23.407 13.0189 23.114C12.7259 22.821 12.3284 22.6563 11.914 22.6563C11.4996 22.6563 11.1022 22.821 10.8092 23.114C10.5162 23.407 10.3515 23.8044 10.3515 24.2188C10.3515 24.6332 10.5162 25.0307 10.8092 25.3237C11.1022 25.6167 11.4996 25.7813 11.914 25.7813C12.3284 25.7813 12.7259 25.6167 13.0189 25.3237C13.3119 25.0307 13.4765 24.6332 13.4765 24.2188ZM12.7797 29.0188C12.5119 29.1735 12.2961 29.404 12.1594 29.6814C12.0228 29.9587 11.9715 30.2704 12.0121 30.5769C12.0526 30.8834 12.1832 31.171 12.3873 31.4032C12.5914 31.6355 12.8598 31.802 13.1585 31.8817C13.4572 31.9613 13.7729 31.9506 14.0655 31.8508C14.3581 31.7509 14.6146 31.5666 14.8023 31.321C14.9901 31.0753 15.1008 30.7795 15.1204 30.471C15.14 30.1624 15.0677 29.855 14.9125 29.5876C14.7038 29.2298 14.3622 28.9691 13.962 28.8623C13.5619 28.7554 13.1357 28.8111 12.7765 29.0173L12.7797 29.0188ZM14.3422 16.7126C14.1642 16.6022 13.9658 16.5288 13.7588 16.4966C13.5519 16.4644 13.3406 16.4742 13.1375 16.5253C12.9344 16.5764 12.7436 16.6678 12.5765 16.7941C12.4095 16.9204 12.2695 17.079 12.1649 17.2604C12.0604 17.4419 11.9933 17.6425 11.9679 17.8504C11.9424 18.0583 11.959 18.2692 12.0166 18.4705C12.0742 18.6719 12.1718 18.8596 12.3034 19.0225C12.435 19.1854 12.598 19.3202 12.7828 19.4188C13.1404 19.6064 13.5567 19.6482 13.9444 19.5356C14.3322 19.4229 14.6613 19.1646 14.8627 18.8146C15.0641 18.4647 15.1223 18.0503 15.0249 17.6585C14.9276 17.2666 14.6839 16.9276 14.3422 16.7126ZM35.6578 19.4188C35.845 19.3216 36.0105 19.1874 36.1444 19.0244C36.2783 18.8615 36.3779 18.6731 36.437 18.4706C36.4962 18.2681 36.5137 18.0558 36.4886 17.8463C36.4635 17.6369 36.3962 17.4347 36.2909 17.252C36.1855 17.0692 36.0443 16.9097 35.8756 16.783C35.7069 16.6564 35.5144 16.5651 35.3095 16.5149C35.1046 16.4646 34.8917 16.4564 34.6836 16.4906C34.4754 16.5249 34.2764 16.6009 34.0984 16.7142C33.7588 16.9303 33.5156 17.2692 33.4197 17.6602C33.3238 18.0512 33.3825 18.4641 33.5836 18.8128C33.7847 19.1616 34.1126 19.4193 34.499 19.5322C34.8855 19.6451 35.3006 19.6045 35.6578 19.4188ZM18.8453 33.5235C18.4879 33.3382 18.0728 33.2978 17.6864 33.4107C17.3 33.5237 16.972 33.7813 16.7707 34.1299C16.5694 34.4786 16.5103 34.8914 16.6057 35.2825C16.7011 35.6737 16.9436 36.0129 17.2828 36.2298C17.6415 36.4337 18.0663 36.4875 18.4645 36.3794C18.8626 36.2713 19.2019 36.0101 19.4082 35.6527C19.6145 35.2954 19.6711 34.871 19.5657 34.4721C19.4602 34.0732 19.2012 33.7322 18.8453 33.5235ZM18.8453 14.9142C19.2042 14.707 19.466 14.3657 19.5733 13.9654C19.6805 13.5651 19.6244 13.1387 19.4172 12.7798C19.263 12.5123 19.0329 12.2965 18.7561 12.1597C18.4792 12.023 18.168 11.9714 17.8619 12.0116C17.5557 12.0517 17.2683 12.1817 17.0361 12.3852C16.8039 12.5887 16.6372 12.8565 16.5572 13.1547C16.4771 13.4529 16.4874 13.7682 16.5865 14.0606C16.6857 14.353 16.8694 14.6095 17.1143 14.7975C17.3593 14.9855 17.6545 15.0966 17.9626 15.1168C18.2707 15.1371 18.5779 15.0654 18.8453 14.911V14.9142ZM35.6578 29.0188C35.2988 28.8128 34.8729 28.7571 34.473 28.864C34.0731 28.9708 33.7318 29.2315 33.5234 29.5892C33.3315 29.947 33.2863 30.3655 33.3974 30.7561C33.5085 31.1467 33.7671 31.4788 34.1186 31.6821C34.4701 31.8854 34.8869 31.9441 35.2809 31.8457C35.6748 31.7473 36.0151 31.4995 36.2297 31.1548C36.4367 30.7955 36.4929 30.3689 36.3861 29.9682C36.2792 29.5676 36.0178 29.2256 35.6594 29.0173L35.6578 29.0188ZM31.1562 12.2063C30.7985 12.0192 30.3822 11.9776 29.9946 12.0904C29.6069 12.2031 29.2778 12.4613 29.0762 12.8111C28.8745 13.1609 28.816 13.5751 28.9127 13.967C29.0095 14.359 29.2541 14.6984 29.5953 14.9142C29.7732 15.0198 29.9704 15.0891 30.1753 15.1179C30.3802 15.1467 30.5888 15.1345 30.789 15.0821C30.9892 15.0296 31.177 14.938 31.3414 14.8123C31.5059 14.6867 31.6437 14.5297 31.747 14.3504C31.8503 14.171 31.9169 13.973 31.943 13.7677C31.9691 13.5624 31.9542 13.354 31.8991 13.1545C31.8439 12.9551 31.7498 12.7685 31.622 12.6058C31.4942 12.443 31.3353 12.3072 31.1547 12.2063H31.1562ZM36.5312 22.6563C36.1168 22.6563 35.7194 22.821 35.4264 23.114C35.1333 23.407 34.9687 23.8044 34.9687 24.2188C34.9687 24.6332 35.1333 25.0307 35.4264 25.3237C35.7194 25.6167 36.1168 25.7813 36.5312 25.7813C36.9456 25.7813 37.3431 25.6167 37.6361 25.3237C37.9291 25.0307 38.0937 24.6332 38.0937 24.2188C38.0937 23.8044 37.9291 23.407 37.6361 23.114C37.3431 22.821 36.9456 22.6563 36.5312 22.6563ZM24.2187 10.3501C23.3594 10.3501 22.6562 11.0501 22.6562 11.9126L21.9297 23.386L17.2359 26.4485C16.877 26.6559 16.6153 26.9974 16.5082 27.3978C16.4011 27.7983 16.4574 28.2248 16.6648 28.5837C16.8722 28.9426 17.2137 29.2043 17.6141 29.3114C18.0145 29.4185 18.4411 29.3622 18.8 29.1548L23.9656 26.5345C24.05 26.5454 24.1343 26.561 24.2234 26.561C25.5203 26.561 26.5672 25.5142 26.5672 24.2173L25.7859 11.911C25.7859 11.4966 25.6213 11.0992 25.3283 10.8062C25.0352 10.5132 24.6378 10.3485 24.2234 10.3485L24.2187 10.3501ZM24.2187 34.9642C23.3594 34.9642 22.6562 35.6626 22.6562 36.5267C22.6562 37.3907 23.3594 38.0892 24.2187 38.0892C25.0781 38.0892 25.7812 37.3907 25.7812 36.5267C25.7812 35.6626 25.0828 34.9642 24.2187 34.9642ZM29.5937 33.5235C29.3256 33.6775 29.1092 33.9076 28.9719 34.1847C28.8346 34.4617 28.7826 34.7732 28.8225 35.0799C28.8623 35.3865 28.9923 35.6744 29.1958 35.9071C29.3994 36.1398 29.6674 36.3069 29.966 36.3873C30.2645 36.4676 30.5802 36.4576 30.8731 36.3584C31.166 36.2592 31.4228 36.0754 31.6111 35.8302C31.7995 35.585 31.9108 35.2894 31.9311 34.9809C31.9513 34.6723 31.8796 34.3647 31.725 34.097C31.6225 33.9192 31.486 33.7633 31.3233 33.6382C31.1606 33.5131 30.9748 33.4214 30.7766 33.3681C30.5784 33.3149 30.3716 33.3012 30.1681 33.3278C29.9646 33.3545 29.7684 33.421 29.5906 33.5235H29.5937Z" fill="#96C758"/>
</g>
</svg>
        </i>
      </div>
      <h3>24/7 Access to Care</h3>
      <p>
        Access healthcare on your schedule, not ours. Whether it’s midnight or early morning, 
        you can reach a licensed professional who’s ready to assist. Our app ensures that 
        high-quality medical advice is just a tap away — anytime, anywhere.
      </p>
    </div>

    <div className="feature-card">
      <div className="icon-container">
        <i className="icon-calendar">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="healthicons:i-schedule-school-date-time">
<g id="Group">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 21.875C11.9474 21.875 11.4175 22.0945 11.0268 22.4852C10.6361 22.8759 10.4166 23.4058 10.4166 23.9583V26.0417C10.4166 26.5942 10.6361 27.1241 11.0268 27.5148C11.4175 27.9055 11.9474 28.125 12.5 28.125H14.5833C15.1358 28.125 15.6657 27.9055 16.0564 27.5148C16.4471 27.1241 16.6666 26.5942 16.6666 26.0417V23.9583C16.6666 23.4058 16.4471 22.8759 16.0564 22.4852C15.6657 22.0945 15.1358 21.875 14.5833 21.875H12.5ZM12.5 23.9583V26.0417H14.5833V23.9583H12.5ZM18.75 23.9583C18.75 23.4058 18.9695 22.8759 19.3602 22.4852C19.7509 22.0945 20.2808 21.875 20.8333 21.875H22.9166C23.4692 21.875 23.9991 22.0945 24.3898 22.4852C24.7805 22.8759 25 23.4058 25 23.9583V26.0417C25 26.5942 24.7805 27.1241 24.3898 27.5148C23.9991 27.9055 23.4692 28.125 22.9166 28.125H20.8333C20.2808 28.125 19.7509 27.9055 19.3602 27.5148C18.9695 27.1241 18.75 26.5942 18.75 26.0417V23.9583ZM20.8333 23.9583H22.9166V26.0417H20.8333V23.9583ZM29.1666 21.875C28.6141 21.875 28.0842 22.0945 27.6935 22.4852C27.3028 22.8759 27.0833 23.4058 27.0833 23.9583V26.0417C27.0833 26.5942 27.3028 27.1241 27.6935 27.5148C28.0842 27.9055 28.6141 28.125 29.1666 28.125H31.25C31.8025 28.125 32.3324 27.9055 32.7231 27.5148C33.1138 27.1241 33.3333 26.5942 33.3333 26.0417V23.9583C33.3333 23.4058 33.1138 22.8759 32.7231 22.4852C32.3324 22.0945 31.8025 21.875 31.25 21.875H29.1666ZM29.1666 23.9583V26.0417H31.25V23.9583H29.1666ZM10.4166 32.2917C10.4166 31.7391 10.6361 31.2092 11.0268 30.8185C11.4175 30.4278 11.9474 30.2083 12.5 30.2083H14.5833C15.1358 30.2083 15.6657 30.4278 16.0564 30.8185C16.4471 31.2092 16.6666 31.7391 16.6666 32.2917V34.375C16.6666 34.9275 16.4471 35.4574 16.0564 35.8481C15.6657 36.2388 15.1358 36.4583 14.5833 36.4583H12.5C11.9474 36.4583 11.4175 36.2388 11.0268 35.8481C10.6361 35.4574 10.4166 34.9275 10.4166 34.375V32.2917ZM14.5833 32.2917V34.375H12.5V32.2917H14.5833ZM20.8333 30.2083C20.2808 30.2083 19.7509 30.4278 19.3602 30.8185C18.9695 31.2092 18.75 31.7391 18.75 32.2917V34.375C18.75 34.9275 18.9695 35.4574 19.3602 35.8481C19.7509 36.2388 20.2808 36.4583 20.8333 36.4583H22.9166C23.4692 36.4583 23.9991 36.2388 24.3898 35.8481C24.7805 35.4574 25 34.9275 25 34.375V32.2917C25 31.7391 24.7805 31.2092 24.3898 30.8185C23.9991 30.4278 23.4692 30.2083 22.9166 30.2083H20.8333ZM22.9166 32.2917H20.8333V34.375H22.9166V32.2917Z" fill="#96C758"/>
<path id="Vector_2" d="M37.5 33.8542C37.5 33.5779 37.3902 33.3129 37.1949 33.1176C36.9995 32.9222 36.7346 32.8125 36.4583 32.8125C36.182 32.8125 35.9171 32.9222 35.7217 33.1176C35.5264 33.3129 35.4166 33.5779 35.4166 33.8542V36.8896L36.7635 38.2365C36.96 38.4262 37.2231 38.5312 37.4962 38.5288C37.7693 38.5265 38.0306 38.4169 38.2237 38.2238C38.4169 38.0306 38.5264 37.7694 38.5288 37.4963C38.5312 37.2231 38.4262 36.96 38.2364 36.7635L37.5 36.0271V33.8542Z" fill="#96C758"/>
<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 7.29167C12.5 7.0154 12.6097 6.75045 12.8051 6.5551C13.0004 6.35975 13.2654 6.25 13.5417 6.25C13.8179 6.25 14.0829 6.35975 14.2782 6.5551C14.4736 6.75045 14.5833 7.0154 14.5833 7.29167V12.5C14.5833 12.7763 14.6931 13.0412 14.8884 13.2366C15.0838 13.4319 15.3487 13.5417 15.625 13.5417C15.9013 13.5417 16.1662 13.4319 16.3616 13.2366C16.5569 13.0412 16.6667 12.7763 16.6667 12.5V9.375H27.0833V7.29167C27.0833 7.0154 27.1931 6.75045 27.3884 6.5551C27.5838 6.35975 27.8487 6.25 28.125 6.25C28.4013 6.25 28.6662 6.35975 28.8616 6.5551C29.0569 6.75045 29.1667 7.0154 29.1667 7.29167V12.5C29.1667 12.7763 29.2764 13.0412 29.4718 13.2366C29.6671 13.4319 29.9321 13.5417 30.2083 13.5417C30.4846 13.5417 30.7496 13.4319 30.9449 13.2366C31.1403 13.0412 31.25 12.7763 31.25 12.5V9.375H34.375C35.2038 9.375 35.9987 9.70424 36.5847 10.2903C37.1708 10.8763 37.5 11.6712 37.5 12.5V29.2396C39.3245 29.5033 40.9815 30.4482 42.1375 31.8842C43.2935 33.3202 43.8628 35.1407 43.7308 36.9795C43.5988 38.8182 42.7753 40.5388 41.426 41.7949C40.0768 43.0511 38.3018 43.7496 36.4583 43.75C35.2826 43.7509 34.1242 43.4672 33.0821 42.923C32.0399 42.3788 31.1451 41.5903 30.474 40.625H9.375C8.5462 40.625 7.75134 40.2958 7.16529 39.7097C6.57924 39.1237 6.25 38.3288 6.25 37.5V12.5C6.25 11.6712 6.57924 10.8763 7.16529 10.2903C7.75134 9.70424 8.5462 9.375 9.375 9.375H12.5V7.29167ZM29.1667 36.4583C29.1662 34.7046 29.7978 33.0095 30.9457 31.6837C32.0936 30.3578 33.6809 29.4901 35.4167 29.2396V18.75H8.33333V37.5C8.33333 37.7763 8.44308 38.0412 8.63843 38.2366C8.83378 38.4319 9.09873 38.5417 9.375 38.5417H29.4688C29.2678 37.8655 29.1661 37.1637 29.1667 36.4583ZM41.6667 36.4583C41.6667 37.8397 41.1179 39.1644 40.1412 40.1412C39.1644 41.1179 37.8397 41.6667 36.4583 41.6667C35.077 41.6667 33.7522 41.1179 32.7755 40.1412C31.7987 39.1644 31.25 37.8397 31.25 36.4583C31.25 35.077 31.7987 33.7522 32.7755 32.7755C33.7522 31.7987 35.077 31.25 36.4583 31.25C37.8397 31.25 39.1644 31.7987 40.1412 32.7755C41.1179 33.7522 41.6667 35.077 41.6667 36.4583Z" fill="#96C758"/>
</g>
</g>
</svg>

        </i>
      </div>
      <h3>Easy Appointment Scheduling</h3>
      <p>
        No more calling multiple offices or dealing with long wait times. Book an appointment 
        with just a few clicks. Choose a time that works for you, select your preferred doctor, 
        and get a reminder before your scheduled consultation.
      </p>
    </div>

    <div className="feature-card">
      <div className="icon-container">
        <i className="icon-video">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="mynaui:video-solid">
<path id="Vector" d="M10.4167 11.4583C8.8972 11.4583 7.43996 12.0619 6.36553 13.1363C5.29111 14.2107 4.6875 15.6679 4.6875 17.1874V32.8124C4.6875 34.3319 5.29111 35.7891 6.36553 36.8636C7.43996 37.938 8.8972 38.5416 10.4167 38.5416H28.125C29.6445 38.5416 31.1017 37.938 32.1761 36.8636C33.2506 35.7891 33.8542 34.3319 33.8542 32.8124V29.4916L40.9771 35.8353C42.6542 37.3291 45.3125 36.1374 45.3125 33.8895V15.3437C45.3125 13.0937 42.6542 11.9041 40.9771 13.3978L33.8542 19.7416V17.1874C33.8542 15.6679 33.2506 14.2107 32.1761 13.1363C31.1017 12.0619 29.6445 11.4583 28.125 11.4583H10.4167Z" fill="#96C758"/>
</g>
</svg>

        </i>
      </div>
      <h3>Video & Chat Consultations</h3>
      <p>
        Experience the personal connection of an in-person visit right from your device. Our 
        secure video and chat options allow you to talk directly to your provider, share symptoms, 
        and discuss treatment plans in real time.
      </p>
    </div>

    <div className="feature-card">
      <div className="icon-container">
        <i className="icon-tag">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="entypo:price-tag" clip-path="url(#clip0_565_1586)">
<path id="Vector" d="M48.47 1.01241C48.325 0.651185 48.0462 0.359788 47.6918 0.198835C47.3374 0.0378823 46.9346 0.0197659 46.5672 0.148255C46.1997 0.276744 45.896 0.541945 45.7191 0.888688C45.5422 1.23543 45.5058 1.63702 45.6175 2.00991C47.94 8.68491 43.33 13.6699 39.815 16.3399L38.395 14.3049C37.9175 13.6224 36.85 13.0549 36.02 13.0449L28.05 13.0799C27.0764 13.1091 26.1287 13.401 25.3075 13.9249L1.8225 30.3924C1.27623 30.7768 0.904545 31.362 0.788811 32.0199C0.673076 32.6777 0.822727 33.3546 1.205 33.9024L11.8775 49.1724C12.6775 50.3099 13.955 50.1724 15.095 49.3774L38.58 32.9074C39.255 32.4299 40.035 31.3999 40.31 30.6124L42.805 22.7499C43.08 21.9649 42.9125 20.7674 42.435 20.0849L41.57 18.8449C46.29 15.2274 51.19 8.83491 48.47 1.01241ZM37.5425 24.4074C36.6683 25.0177 35.5876 25.2563 34.5377 25.0707C33.4878 24.885 32.5545 24.2905 31.9425 23.4174C31.3298 22.5415 31.0897 21.4584 31.2748 20.4057C31.46 19.3529 32.0553 18.4167 32.93 17.8024C33.6162 17.323 34.4348 17.0695 35.2718 17.0771C36.1088 17.0847 36.9226 17.3531 37.6 17.8449C36.92 18.2549 36.4525 18.4949 36.365 18.5324C36.0551 18.6802 35.8046 18.9288 35.6545 19.2376C35.5044 19.5464 35.4636 19.897 35.5389 20.232C35.6141 20.5669 35.8009 20.8664 36.0686 21.0813C36.3364 21.2963 36.6692 21.4139 37.0125 21.4149C37.2292 21.4149 37.4433 21.3657 37.655 21.2674C38.1417 21.0391 38.6575 20.7641 39.2025 20.4424C39.3258 21.1925 39.2355 21.9621 38.9419 22.6633C38.6484 23.3645 38.1634 23.9689 37.5425 24.4074Z" fill="#96C758"/>
</g>
<defs>
<clipPath id="clip0_565_1586">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>

        </i>
      </div>
      <h3>Affordable, Transparent Pricing</h3>
      <p>
      Quality healthcare doesn’t have to break the bank. Our pricing is straightforward, with no hidden fees, and we offer flexible payment options including insurance.
      </p>
    </div>

    <div className="feature-card">
      <div className="icon-container">
        <i className="icon-prescription">
        <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="solar:test-tube-bold">
<path id="Vector" d="M17.2229 0.370926C17.4338 0.0143465 17.7776 -0.2439 18.1788 -0.347036C18.58 -0.450173 19.0058 -0.389759 19.3625 -0.179075L21.0958 0.845925L40.3604 11.9022C40.7198 12.1085 40.9826 12.4492 41.0908 12.8493C41.199 13.2494 41.1439 13.6761 40.9375 14.0355C40.7311 14.3949 40.3904 14.6577 39.9903 14.7659C39.5903 14.8741 39.1636 14.819 38.8042 14.6126L37.0479 13.6043L33.9125 19.0168L33.9083 19.0126L28.5792 15.948C28.4012 15.842 28.2039 15.7725 27.9988 15.7435C27.7937 15.7145 27.5849 15.7265 27.3845 15.779C27.1841 15.8314 26.9961 15.9231 26.8315 16.0489C26.6669 16.1746 26.5289 16.3318 26.4256 16.5114C26.3223 16.6909 26.2557 16.8892 26.2297 17.0947C26.2037 17.3002 26.2189 17.5088 26.2743 17.7084C26.3297 17.908 26.4242 18.0946 26.5524 18.2574C26.6805 18.4201 26.8398 18.5557 27.0208 18.6563L32.3458 21.7188L30.3437 25.1772L30.3396 25.1751L21.5833 20.1376C21.4053 20.0316 21.2081 19.9621 21.003 19.9331C20.7979 19.9041 20.589 19.9161 20.3886 19.9685C20.1882 20.021 20.0003 20.1127 19.8356 20.2384C19.671 20.3642 19.533 20.5214 19.4297 20.7009C19.3264 20.8805 19.2598 21.0788 19.2339 21.2843C19.2079 21.4898 19.2231 21.6984 19.2784 21.898C19.3338 22.0976 19.4284 22.2842 19.5565 22.4469C19.6847 22.6097 19.8439 22.7453 20.025 22.8459L28.775 27.8813L26.9312 31.0668L26.9271 31.0626L21.4833 27.9313C21.1246 27.732 20.7019 27.6817 20.3064 27.7915C19.911 27.9012 19.5746 28.1621 19.3699 28.5178C19.1653 28.8735 19.1088 29.2955 19.2126 29.6925C19.3165 30.0895 19.5724 30.4297 19.925 30.6397L25.3646 33.7688L23.0312 37.7938C21.6856 40.1101 19.4769 41.7987 16.8888 42.4899C14.3007 43.181 11.5442 42.8184 9.22291 41.4813C8.07454 40.8226 7.06753 39.9436 6.25967 38.8948C5.45181 37.846 4.85899 36.648 4.51523 35.3695C4.17146 34.0911 4.08352 32.7573 4.25644 31.4448C4.42937 30.1322 4.85975 28.8667 5.52291 27.7209L19.5271 3.54801L19.5146 3.54176L17.7729 2.51259C17.5961 2.40818 17.4415 2.26993 17.3182 2.10575C17.1948 1.94157 17.105 1.75468 17.0539 1.55577C17.0029 1.35686 16.9915 1.14984 17.0205 0.94653C17.0495 0.743224 17.1183 0.547627 17.2229 0.370926ZM41.6667 32.4168C43.9687 32.4168 45.8333 30.473 45.8333 28.0772C45.8333 26.5772 44.2021 24.5751 42.9792 23.2855C42.8115 23.105 42.6084 22.9611 42.3825 22.8627C42.1567 22.7642 41.913 22.7134 41.6667 22.7134C41.4203 22.7134 41.1766 22.7642 40.9508 22.8627C40.725 22.9611 40.5219 23.105 40.3542 23.2855C39.1312 24.5751 37.5 26.5772 37.5 28.0772C37.5 30.473 39.3646 32.4168 41.6667 32.4168Z" fill="#96C758"/>
</g>
</svg>

        </i>
      </div>
      <h3>Symptom Checker & Triage</h3>
      <p>
      Our interactive symptom checker helps you understand your symptoms and guides you to the right care, whether that’s a doctor’s consultation or self-care recommendations
      </p>
    </div>

    <div className="feature-card">
      <div className="icon-container">
        <i className="icon-report">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ep:list">
<path id="Vector" d="M34.375 9.375H42.1875V45.3125H7.8125V9.375H15.625V12.5H34.375V9.375ZM14.0625 25H35.9375V21.875H14.0625V25ZM14.0625 37.5H35.9375V34.375H14.0625V37.5ZM18.75 9.375V4.6875H31.25V9.375H18.75Z" fill="#96C758"/>
</g>
</svg>

        </i>
      </div>
      <h3>Comprehensive Report</h3>
      <p>
      Access and share your medical records anytime. Our app safely stores all consultation notes, test results, and prescriptions, ensuring your health history is organized and accessible.
      </p>
    </div>
  </div>

  <div className="worker-con">
    <div className="worker-con-left">
        <img src={Worker_img} alt="" />
    </div>
    <div className="worker-con-right">
        <p className='worker-title-head'>Trusted <br />
Healthcare <br />
Professionals</p>
<p className='worker-title'>Connect with certified, experienced doctors who are committed to your well-being.</p>
    <button className='worker-button'>
       <a href="/">Learn More</a> 
        </button>
    </div>
  </div>

  <section className="how-it-works">
      <h2>How It Works</h2>
      <p className="description">A step-by-step guide that simplifies <br /> the process for first-time users.</p>
      <div className="steps-container">
        <div className="step-card">
          <div className="icon">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="solar:login-3-bold">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.2084 27.9067V42.0933C10.2084 48.7842 10.2084 52.1267 12.3142 54.2062C14.2246 56.0933 17.1967 56.2654 22.8025 56.2829L22.7588 55.9767C22.4234 53.515 22.4234 50.3883 22.4234 46.5062V46.3517C22.4234 45.1763 23.3888 44.2225 24.5817 44.2225C25.7717 44.2225 26.7371 45.1763 26.7371 46.3517C26.7371 50.4233 26.74 53.2642 27.0317 55.4079C27.3175 57.4904 27.8338 58.5958 28.63 59.3804C29.4263 60.165 30.5434 60.6783 32.6521 60.9554C34.8221 61.2471 37.7009 61.25 41.828 61.25H44.7009C48.828 61.25 51.7038 61.2442 53.8767 60.9583C55.9855 60.6783 57.1025 60.165 57.8959 59.3804C58.6921 58.5929 59.2113 57.4904 59.4942 55.4079C59.7859 53.2671 59.7917 50.4233 59.7917 46.3517V23.6483C59.7917 19.5737 59.7859 16.7358 59.4942 14.5921C59.2113 12.5096 58.6921 11.4042 57.8988 10.6196C57.1025 9.83208 55.9855 9.32167 53.8738 9.04458C51.7067 8.75 48.8309 8.75 44.7038 8.75H41.8309C37.7038 8.75 34.825 8.75583 32.655 9.04167C30.5463 9.32167 29.4292 9.835 28.633 10.6196C27.8367 11.4071 27.3205 12.5096 27.0346 14.5921C26.743 16.7329 26.74 19.5737 26.74 23.6483C26.74 24.8237 25.7746 25.7775 24.5817 25.7775C24.3003 25.7794 24.0213 25.7259 23.7607 25.6199C23.5 25.5139 23.2628 25.3575 23.0626 25.1598C22.8624 24.962 22.7032 24.7267 22.594 24.4674C22.4848 24.208 22.4278 23.9297 22.4263 23.6483V23.4938C22.4263 19.6146 22.4263 16.485 22.7617 14.0233L22.8055 13.7171C17.1996 13.7346 14.2305 13.9067 12.3171 15.7938C10.2113 17.8733 10.2084 21.2188 10.2084 27.9067ZM39.0425 43.5983L46.2292 36.505C46.4292 36.3087 46.5881 36.0745 46.6965 35.8161C46.805 35.5577 46.8609 35.2802 46.8609 35C46.8609 34.7198 46.805 34.4423 46.6965 34.1839C46.5881 33.9255 46.4292 33.6913 46.2292 33.495L39.0425 26.4017C38.6357 26.0025 38.0885 25.7788 37.5186 25.7788C36.9486 25.7788 36.4014 26.0025 35.9946 26.4017C35.7946 26.598 35.6357 26.8322 35.5273 27.0906C35.4188 27.349 35.363 27.6264 35.363 27.9067C35.363 28.1869 35.4188 28.4643 35.5273 28.7228C35.6357 28.9812 35.7946 29.2154 35.9946 29.4117L39.5005 32.8708H18.833C18.5513 32.8685 18.272 32.9218 18.011 33.0276C17.75 33.1335 17.5125 33.2897 17.312 33.4875C17.1115 33.6853 16.952 33.9207 16.8426 34.1803C16.7332 34.4398 16.6761 34.7184 16.6746 35C16.6746 36.1754 17.64 37.1292 18.833 37.1292H39.4975L35.9917 40.5883C35.7917 40.7846 35.6328 41.0188 35.5244 41.2772C35.4159 41.5357 35.36 41.8131 35.36 42.0933C35.36 42.3736 35.4159 42.651 35.5244 42.9094C35.6328 43.1678 35.7917 43.402 35.9917 43.5983C36.3985 43.9975 36.9457 44.2212 37.5157 44.2212C38.0856 44.2212 38.6357 43.9975 39.0425 43.5983Z" fill="#E9F4FA"/>
</g>
</svg>

          </div>
          <h3>Sign Up &  <br />Complete Profile</h3>
        </div>
        <div className="step-card">
          <div className="icon">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icon-park-solid:connect">
<g id="Group">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 17.4999C13.2138 17.4999 14.6975 16.8853 15.7915 15.7914C16.8855 14.6974 17.5 13.2137 17.5 11.6666C17.5 10.1195 16.8855 8.63576 15.7915 7.5418C14.6975 6.44783 13.2138 5.83325 11.6667 5.83325C10.1196 5.83325 8.63588 6.44783 7.54192 7.5418C6.44796 8.63576 5.83337 10.1195 5.83337 11.6666C5.83337 13.2137 6.44796 14.6974 7.54192 15.7914C8.63588 16.8853 10.1196 17.4999 11.6667 17.4999ZM14.5834 61.2499C16.904 61.2499 19.1296 60.328 20.7706 58.6871C22.4115 57.0462 23.3334 54.8206 23.3334 52.4999C23.3334 50.1793 22.4115 47.9537 20.7706 46.3127C19.1296 44.6718 16.904 43.7499 14.5834 43.7499C12.2627 43.7499 10.0371 44.6718 8.39619 46.3127C6.75525 47.9537 5.83337 50.1793 5.83337 52.4999C5.83337 54.8206 6.75525 57.0462 8.39619 58.6871C10.0371 60.328 12.2627 61.2499 14.5834 61.2499ZM55.4167 64.1666C57.7374 64.1666 59.9629 63.2447 61.6039 61.6038C63.2448 59.9628 64.1667 57.7372 64.1667 55.4166C64.1667 53.0959 63.2448 50.8703 61.6039 49.2294C59.9629 47.5885 57.7374 46.6666 55.4167 46.6666C53.0961 46.6666 50.8705 47.5885 49.2295 49.2294C47.5886 50.8703 46.6667 53.0959 46.6667 55.4166C46.6667 57.7372 47.5886 59.9628 49.2295 61.6038C50.8705 63.2447 53.0961 64.1666 55.4167 64.1666ZM32.0834 40.8333C35.1776 40.8332 38.145 39.6041 40.333 37.4162C42.5209 35.2282 43.75 32.2608 43.75 29.1666C43.75 26.0724 42.5209 23.1049 40.333 20.917C38.145 18.7291 35.1776 17.4999 32.0834 17.4999C28.9892 17.4999 26.0217 18.7291 23.8338 20.917C21.6459 23.1049 20.4167 26.0724 20.4167 29.1666C20.4167 32.2608 21.6459 35.2282 23.8338 37.4162C26.0217 39.6041 28.9892 40.8332 32.0834 40.8333ZM49.5834 17.4999C51.1305 17.4999 52.6142 16.8853 53.7082 15.7914C54.8021 14.6974 55.4167 13.2137 55.4167 11.6666C55.4167 10.1195 54.8021 8.63576 53.7082 7.5418C52.6142 6.44783 51.1305 5.83325 49.5834 5.83325C48.0363 5.83325 46.5525 6.44783 45.4586 7.5418C44.3646 8.63576 43.75 10.1195 43.75 11.6666C43.75 13.2137 44.3646 14.6974 45.4586 15.7914C46.5525 16.8853 48.0363 17.4999 49.5834 17.4999Z" fill="#E9F4FA" stroke="#E9F4FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M16.0417 16.0415L21.8751 21.8748M43.7501 17.4998L40.8334 20.4165M49.5834 48.854L40.8334 37.9165M20.4167 45.2082L26.2501 39.3748" stroke="#E9F4FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>

          </div>
          <h3>Connect <br /> with a Doctor</h3>
        </div>
        <div className="step-card">
          <div className="icon">
          <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame 209">
<g id="Group">
<path id="Vector" d="M1.66699 35.8334H8.65241C9.50991 35.8334 10.3557 36.0259 11.1228 36.3992L17.0787 39.2809C17.8457 39.6513 18.6916 39.8438 19.552 39.8438H22.5912C25.5312 39.8438 27.917 42.1509 27.917 44.9976C27.917 45.1142 27.8382 45.2134 27.7245 45.2455L20.3132 47.2959C18.9834 47.6633 17.5654 47.5347 16.3232 46.9342L9.95616 43.8542M13.3337 17.8638C13.3337 11.7621 18.8637 5.73047 22.7428 2.25089C23.7644 1.33627 25.0875 0.830566 26.4587 0.830566C27.8299 0.830566 29.1529 1.33627 30.1745 2.25089C34.0537 5.73339 39.5837 11.7592 39.5837 17.8667C39.5837 23.8459 34.6137 30.0001 26.4587 30.0001C18.3037 30.0001 13.3337 23.8459 13.3337 17.8638Z" stroke="#E9F4FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M27.917 43.125L41.3132 39.0096C42.4795 38.6517 43.729 38.6714 44.8834 39.0658C46.0378 39.4602 47.0381 40.2092 47.7416 41.2058C48.8178 42.6933 48.3803 44.8283 46.8112 45.7325L24.8924 58.3821C24.207 58.7786 23.4481 59.0315 22.6619 59.1253C21.8756 59.219 21.0785 59.1517 20.3191 58.9275L1.66699 53.3917" stroke="#E9F4FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>

          </div>
          <h3>Receive <br /> Treatment <br /> & Advice</h3>
        </div>
      </div>
    </section>

    <section className="meet-doctors">
  <div className="meet-doctors-content">
    {/* Left Section - Image with Background */}
    <div className="doctor-image-container">
     
      <div className="doctor-image">
      <div className="doctor-image-background"></div>
        <img src={Doctor_1} alt="Doctor" />
        <p className='doctor-image-name'>Dr Alex Beckham</p>
        <p className='doctor-image-title'>Neurologist</p>
      </div>
     
    </div>

    {/* Right Section - Text Content */}
    <div className="doctor-text">
      <h2>Meet Our Doctors</h2>
      <p>
        Our team of dedicated healthcare professionals is here to make a
        difference in your health journey. Each of our doctors brings
        specialized expertise, years of experience, and a compassionate
        approach to patient care. With diverse backgrounds across multiple
        fields of medicine, they are united by a shared commitment to
        providing you with the highest quality of care, wherever you are.
      </p>
    </div>
  </div>

  {/* Doctor Thumbnails */}
  <div className="doctor-thumbnails">
    <div className="thumbnail">
      <img src={Doctor_2} alt="Doctor Thumbnail" />
    </div>
    <div className="thumbnail">
      <img src={Doctor_3} alt="Doctor Thumbnail" />
    </div>
    <div className="thumbnail">
      <img src={Doctor_4} alt="Doctor Thumbnail" />
    </div>
    <div className="thumbnail">
      <img src={Doctor_5} alt="Doctor Thumbnail" />
    </div>
  </div>
</section>


<section className="testimonials-section">
      <p className="testimonials-title">Clients Testimonials</p>
      <div className="testimonials-title_line"></div>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img
            src={Client_1}
            alt="Jessica M."
            className="testimonial-image"
          />
          <p className="testimonial-text">
            I was skeptical about telemedicine, but the experience with CurePlus
            has been life-changing. I was able to connect with a doctor late at
            night when I needed immediate advice for my son’s high fever. Dr.
            Lee was professional, caring, and gave us clear instructions that
            helped us avoid an emergency room visit.
          </p>
          <p className="testimonial-author">Jessica M., Houston, TX</p>
        </div>
        <div className="testimonial-card">
          <img
            src={Client_2}
            alt="Michael R."
            className="testimonial-image"
          />
          <p className="testimonial-text">
            As someone with a busy schedule, it’s always hard to find time for
            in-person appointments. With CurePlus, I can consult with my
            dermatologist right from my office or home. Dr. Gomez has been
            amazing, providing personalized advice that’s improved my skin
            health significantly. This platform has made my life so much easier!
          </p>
          <p className="testimonial-author">Michael R., New York, NY</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default About