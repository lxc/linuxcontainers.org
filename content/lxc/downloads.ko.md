![Download icon](/static/img/download.png)
# 배포판 패키지
LXC는 대부분의 리눅스 배포판에 포함이 되어 있습니다.
설치하려면 패키지 관리자에서 LXC를 선택하기만 하면 됩니다.

배포판은 종종 LXC의 더 새로운 버전의 백포트가 제공될 수 있습니다.
당신의 배포판이 LXC 1.0을 포함하고 있지 않다면 그 것을 사용하는 것도 좋은 대안입니다.

상용화 환경에서는 장기 지원 버전인 LXC 1.0.x를 사용하는 것이 좋습니다. 해당 버전의 안정화 업데이트는 2019년 4월까지 제공될 예정입니다.

우분투 사용자들을 위해 LXC의 공식 PPA를 가지고 있습니다.

 * [lxc-lts](https://launchpad.net/~ubuntu-lxc/+archive/lxc-lts): 최근 장기 지원 버전
 * [lxc-stable](https://launchpad.net/~ubuntu-lxc/+archive/lxc-stable): 최근 안정화 버전

And for those who want development snapshots:

아래는 개발 중의 스냅샷입니다.

 * [lxc-git-master](https://launchpad.net/~ubuntu-lxc/+archive/lxc-git-master): "master" 브랜치
 * [lxc-git-stable-1.0](https://launchpad.net/~ubuntu-lxc/+archive/lxc-git-stable-1.0): "stable-1.0" 브랜치
 * [lxc-git-stable-1.1](https://launchpad.net/~ubuntu-lxc/+archive/lxc-git-stable-1.1): "stable-1.1" 브랜치

# 현재 개발 버전

LXC는 2개의 활성화된 git 브랜치가 있습니다.

 * **master**: 현재 개발 브랜치
 * **stable-1.0**:  LXC 1.0.x를 위한 안정화 업데이트 브랜치

아래 명령어를 사용하여 해당 내용을 클론할 수 있습니다.

    git clone git://github.com/lxc/lxc -b <branch name>

# tar 압축 파일

안정화 버전 tar 압축 파일은 아래에서 다운로드 받으실 수 있습니다.
1.0 이후 모든 버전은 메인테이너 중 한명으로 부터 GPG 사인을 받았습니다.
