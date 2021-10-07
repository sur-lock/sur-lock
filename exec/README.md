# 1. 배포 과정

docker, jenkins, nginx를 통해 백엔드, 프론트엔드를 빌드하고 배포합니다.

특정 브런치에 push 작업이 발생할 때마다 빌드 및 배포를 자동화 시켰습니다.

1. EC2 ssh 접속(`ubuntu@j5a501.p.ssafy.io`)

2. docker 설치

3. jenkins, mysql 도커 이미지 다운로드 및 컨테이너화

   jenkins는 8000번 포트, mysql은 3306번 포트를 연결시킵니다.

   mysql에서 테이블(table)은 JPA를 통해 생성되지만, 스키마(schema)는 직접 생성해주어야 합니다. mysql 컨테이너에 접속하여 스키마를 생성합니다.

4. jenkins CI/CD 파이프라인 구축

   jenkins가 정상적으로 구동되고 있다면 `j5a501.p.ssafy.io:8000`으로 접속할 수 있습니다. 여기서 CI/CD 파이프라인을 구축합니다.

   백엔드와 프론트엔드의 빌드 및 배포를 스크립트로 구현합니다.

   **jenkins 쉘 스크립트**

   ```shell
   cd backend
   chmod 777 mvnw
   ./mvnw clean package
   chmod 777 dockerbuild.sh
   sh dockerbuild.sh
   cd ../frontend
   npm install
   CI=false
   npm run-script build
   ```

   - GitHub에 대한 hook 설정과 Node 설치가 필요합니다.

   - `dockerbuild.sh` : 백엔드를 컨테이너화하고, 이전에 실행중이던 컨테이너를 삭제하고 새로 실행시킵니다.

   - `Dockerfile` : `dockerbuild.sh`에서 `docker build` 명령어에 필요한 설정파일입니다. 백엔드를 도커라이징 하면서 JDK, 포트, 볼륨을 설정합니다.

   - `CI=false` : 프론트엔드 빌드 시, warning을 무시합니다.

5. nginx 설치

6. nginx 설정

   jenkins를 통해 빌드된 프론트엔드의 `index.html`을 nginx에 연결합니다.

   **/etc/nginx/sites-available/default**

   ```shell
   server {
     listen 80;
     location / {
       root /var/jenkins/workspace/Sur-Lock/frontend/build;
       index  index.html index.htm;
       try_files $uri /index.html;
     }
   }
   ```

## 개발 환경

- JVM : openjdk-8
- IDE : IntelliJ IDEA Ultimate 2021.2, Visual Studio Code 1.60.2
- Server : nginx 1.18.0, Spring boot 2.5.5(Tomcat)

# 2. 외부 서비스 정보

[카카오 소셜 로그인](https://developers.kakao.com/product/kakaoLogin)

카카오 계정을 통해 로그인을 구현합니다.

# 3. 데이터베이스 덤프

[surlock_images.sql](./surlock_images.sql)

# 4. 시연 시나리오

설문조사를 생성하면, 해당 설문조사에 대한 링크가 주어집니다. 링크로 접속하면 설문조사 응답페이지로 연결됩니다. 응답을 완료하면 설문조사 결과페이지로 이동합니다.

## 설문조사 생성

1. 홈페이지에 접속해서 로그인한 후에, 메뉴 중 "설문생성"을 클릭합니다.
2. 적절한 제목을 입력하고, 우측하단에 "+" 버튼을 통해 원하는 문항을 추가합니다. 선택에 따라서 문항에 이미지를 추가할 수도 있습니다.
3. 각 문항은 작성한 후에 "저장" 버튼을 눌러야 합니다.
4. 우측하단 "+" 버튼에서 "제출"을 클릭하여 설문조사를 제출합니다. ropsten 테스트넷에 저장하기 때문에 시간이 걸릴 수 있습니다.
5. 저장이 완료되면 설문에 참여할 수 있는 링크가 제공됩니다. 해당 링크를 설문에 참여할 사람들에게 전달합니다.

## 설문조사 응답

1. 응답하기 위해서 특정 설문조사에 대한 링크가 필요합니다. 위에서 제공받은 링크에 접속합니다.
2. 적절한 응답을 입력합니다.
3. 우측하단 "+" 버튼에서 "제출"을 클릭하여 응답을 저장합니다. ropsten 테스트넷에 저장하기 때문에 시간이 걸릴 수 있습니다.
4. 저장이 완료되면 결과 페이지로 이동합니다.

## 설문조사 결과

1. 이미 참여한 설문조사 링크로 접속하거나, 설문을 완료하면 결과 페이지로 옵니다.
2. 해당 설문조사에 대해서 결과를 한 눈에 볼 수 있습니다.
