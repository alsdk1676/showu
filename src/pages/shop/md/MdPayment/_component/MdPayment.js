import React from 'react';
import S from './stylePayment';
import Dropdown2 from './Dropdown2';
import Dropdown1 from './Dropdown1';

const MdPayment = ({ items }) => {
  const options = ['옵션 1', '옵션 2', '옵션 3']; 
  return (
    <S.PaymentWrapper>
      <S.PaymentTitle>
        <h1>주문 / 결제</h1>
      </S.PaymentTitle>

      <S.PaymentProduct>
        <S.Info>주문 상품</S.Info>

        <S.Head>
          <S.Left>
          <S.HeadItem>상품명</S.HeadItem>
          </S.Left>
          <S.Center>
          <S.HeadItem>수량</S.HeadItem>
          </S.Center>
          <S.Right>
          <S.HeadItem>금액</S.HeadItem>
          </S.Right>
        </S.Head>

        <S.PaymentList>
          {items.map((item, index) => (
            <S.PaymentItem key={item.id}>
              <S.ProductImage src={process.env.PUBLIC_URL + "/images/md/md-1.jpg"} alt="주문 상품" />
              <S.Left>{item.name}</S.Left>
              <S.Center>1</S.Center>
              <S.Right>{item.price.toLocaleString()} 원</S.Right>
              </S.PaymentItem>
          ))}
        </S.PaymentList>

        <S.TotalAmount>총 상품 금액 ({items.length}개)</S.TotalAmount>

      </S.PaymentProduct>

      <S.InfoWrapper>
      <S.Info>주문 정보</S.Info>
      <S.OrderInfo>
      <p>주문자</p>
      <S.InputName type='text' id='name' placeholder='이름' />
      </S.OrderInfo>
      <S.OrderInfo>
      <p>이메일</p>
      <S.InputEmail>
      <input type="text" className="email-input" id='email' placeholder='이메일 입력' />
      <span>@</span>

      <S.Dropdown>
      <Dropdown1 options={options} /> 
      </S.Dropdown>
      
      </S.InputEmail>
      </S.OrderInfo>
      <S.OrderInfo>
      <p>휴대전화</p>
      <S.InputPhone>
      <input type="text" maxlength="3" class="phone-input" />
      <span>-</span>
      <input type="text" maxlength="4" class="phone-input" />
      <span>-</span>
      <input type="text" maxlength="4" class="phone-input" />
      </S.InputPhone>
      {/* <S.InputPhone type='text' id='phone' placeholder='+00' /> */}
      </S.OrderInfo>

      <S.Info>배송지</S.Info>
      <S.OrderInfo>
      <p>받는 사람</p>
      <S.InputName type='text' id='name' placeholder='이름' />
      </S.OrderInfo>
      <S.OrderInfo>
      <p>주소</p>
      <S.InputAddress type='text' id='name' placeholder='이름' />
      </S.OrderInfo>
      <S.OrderInfo>
      <p>휴대전화</p>
      <S.InputPhone type='text' id='name' placeholder='이름' />
      </S.OrderInfo>
      </S.InfoWrapper>

      <S.Dropdown>
      <Dropdown2 options={options} /> 
      </S.Dropdown>

      <S.PayWrapper>
      <S.Info>결제 금액</S.Info>
      <S.OrderInfo>상품 금액</S.OrderInfo>
      <S.OrderInfo>배송비</S.OrderInfo>
      <S.OrderInfo>할인 금액</S.OrderInfo>
      </S.PayWrapper>

      <S.TotalWrapper>
      <S.TotalAmount2>총 결제 금액</S.TotalAmount2>
      </S.TotalWrapper>
      
      <S.MethodWrapper>
      <S.Info>결제 수단</S.Info>
      <S.OrderInfo>체크/신용 카드</S.OrderInfo>
      <S.OrderInfo>무통장 입금</S.OrderInfo>
      <S.OrderInfo>토스페이</S.OrderInfo>
      <S.OrderInfo>네이버페이</S.OrderInfo>
      <S.OrderInfo>카카오페이</S.OrderInfo>
      </S.MethodWrapper>
    </S.PaymentWrapper>
  );
};

export default MdPayment;