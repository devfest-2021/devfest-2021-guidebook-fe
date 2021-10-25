import React from 'react';
import 연세 from 'src/assets/school/1.png';
import 이화 from 'src/assets/school/2.png';
import 인하 from 'src/assets/school/3.jpeg';
import 숭실 from 'src/assets/school/4.png';
import 성신 from 'src/assets/school/5.png';
import 외대 from 'src/assets/school/6.png';
import 순천 from 'src/assets/school/7.jpeg';
import 상명 from 'src/assets/school/8.png';
import 과기 from 'src/assets/school/9.svg';
import 동의 from 'src/assets/school/10.png';
import 대진 from 'src/assets/school/11.png';
import 시립 from 'src/assets/school/12.png';
import { Logo } from '../styled';

interface Props {
  name: string;
}

const Url = (name: string) => {
  if (name.replace('미래캠퍼스', '').trim() === '연세대학교') {
    return 연세;
  }
  if (name === '이화여자대학교') {
    return 이화;
  }
  if (name === '인하대학교') {
    return 인하;
  }
  if (name === '숭실대학교') {
    return 숭실;
  }
  if (name === '성신여자대학교') {
    return 성신;
  }
  if (name === '한국외국어대학교') {
    return 외대;
  }
  if (name === '순천향대학교') {
    return 순천;
  }
  if (name === '상명대학교') {
    return 상명;
  }
  if (name === '서울과학기술대학교') {
    return 과기;
  }
  if (name === '동의대학교') {
    return 동의;
  }
  if (name === '대진대학교') {
    return 대진;
  }
  if (name === '서울시립대학교') {
    return 시립;
  }
  return '';
};

export const SchoolLogo = (props: Props) => {
  return Url(props.name) ? <Logo src={Url(props.name)} /> : <></>;
};
