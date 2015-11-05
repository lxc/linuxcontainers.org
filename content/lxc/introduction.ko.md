# LXC 란?

LXC는 리눅스 커널 컨테이너 기능을 위한 사용자영역 인터페이스입니다.
강력한 API와 간단한 도구들을 통해 리눅스 사용자가 쉽게 시스템 또는 어플리케이션 컨테이너들을 생성/관리할 수 있게 해줍니다.

# 기능
현재 LXC는 컨테이너를 만들기 위해 아래의 커널 기능들을 사용하고 있습니다. 

 * 커널 네임스페이스 (ipc, uts, 마운트, pid, 네트워크, 사용자)
 * Apparmor와 SELinux 프로파일
 * Seccomp 정책
 * Chroots (pivot\_root 사용)
 * 커널 캐퍼빌리티
 * CGroups (컨트롤 그룹)

LXC 컨네이너는 보통 chroot와 실제 가상머신의 중간적인 성격을 갖고 있다고 생각되어 집니다. LXC의 목적은 별도의 독립적인 커널이 없어도 보통의 리눅스 설치에 가까운 환경을 만드는 것입니다.

# 구성 요소
LXC는 현재 아래의 몇몇 요소들로 구성되어 있습니다.

 * liblxc 라이브러리
 * API의 프로그래밍 언어 바인딩 :
    * python3 (lxc 내, 1.0.x에서 장기 지원 (LTS, long term support))
    * lua (lxc 내, 1.0.x에서 장기 지원)
    * [Go](https://github.com/lxc/go-lxc)
    * [ruby](https://github.com/lxc/ruby-lxc)
    * [python2](https://github.com/lxc/python2-lxc)
    * [Haskell](https://github.com/fizruk/lxc)
 * 컨테이너 제어를 위한 표준 도구 세트
 * 배포판용 컨테이너 템플릿

# 소프트웨어 사용권
LXC는 대부분의 코드가 GNU LGPLv2.1+ 허가서를 따르는 자유 소프트웨어입니다.
몇몇 안드로이드 컴패터빌리티 비트들은 표준 2-clause BSD 허가서를 따릅니다.
그리고 몇몇 바이너리와 템플릿들은 GNU GPLv2 허가서를 따릅니다.

이 프로젝트는 기본적으로 GNU LGPLv2.1+ 허가서를 따릅니다.

# 지원
LXC의 안정화 버전 공개는 각 리눅스 배포판 안정화 버전의 수정과 보안 업데이트에 따라 달라집니다.

여러 배포판의 요구와 이용가능한 자원에 따라, 특정 LXC 버전에 대한 잦은 버그 수정 업데이트 등의 장기 지원이 있을 수 있습니다.

그외 다른 버전들은 일반적으로 다음 안정화 버전이 나오기 전까지 관리됩니다.

우분투 LTS 버전의 LXC에 대한 상업적인 지원은 [Canonical Ltd](http://www.canonical.com)에서 얻을 수 있습니다.

## 부가 지원
지금 현재, LXC 1.0이 2014년 2월부터 시작하여 2019년 4월까지 (5년이 약간 넘는 기간) 지원을 받는 유일한 버전입니다.

이는 [Canonical Ltd](http://www.canonical.com)와 우분투가 LXC 1.0을 우분투 14.04 LTS (장기 지원)에 포함시켰고 안정적인 1.0 브랜치를 유지하기 위해 LXC upstream과 긴밀하게 협력하는 덕분입니다.
