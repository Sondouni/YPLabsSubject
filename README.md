
# YPLABS_SUBJECT


## 실행방법

```bash
yarn install
cd ios && pod install
yarn ios || yarn android
```

## 실행환경

```bash
nodeJS v20.11.1
Java 17
Xcode 16.1
ios 17.6.1 (iPhone13)
android API 10 (GalaxyNote9)
react-native 0.76.2
```

## 코드 아키텍처

```bash
src 
  -action
    reducer action
  -component
    화면 내 컴포넌트 VAC패턴 고려
  -navigator
    stack navigation config
  -pages
    화면 내 페이지
  -reducers
    reducer 
  -saga
    redux-saga
  -store
    provider 를 위한 store config
  -types
    프로젝트 내 공유 types
  -apis.ts
    api 호출용
  -Utils.ts
    기타 로직
```

## 기타

```bash
Challenging 
  VAC패턴, redux-saga를 사용하는것이 처음이었기 때문에 우선적으로 공부를 하고 사용법 및 사용이유에 대해 습득필요
  그동안 recoil, zustand만 사용하고 redux를 정말 기본적으로만 구현한게 전부라 조금 더 탄탄하게 설계를 못한게 아쉽다
  (isDone,paging에 대한 redux연계, redux-saga Jest test code)
```
