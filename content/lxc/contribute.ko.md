# 소스 코드
LXC의 현재 배포 버전은 아래 명령어를 통해 Github에서 클론할 수 있습니다.

    git clone git://github.com/lxc/lxc

소스코드 tar 압축 파일은 [내려받기](/ko/lxc/downloads) 섹션에 여러 버전이 올려져 있습니다.

안정화 버전에만 있는 버그가 아니라면, 업스트림에 보낸 리뷰는 안정화 버전이 아닌 현재 git 트리를 기준으로 해야 합니다. 

# 패치 제출 과정
모든 제출되는 패치는 **반드시** 패치 작성자의 사인이 들어가야 합니다.

다음 명령어로 쉽게 수행할 수 있습니다 : `git commit -s`

그리고 만약 이전 커밋에서 "-s" 하는 것을 까먹었다면,
다음 명령어를 사용하면 됩니다 : `git commit --amend -s`

## 메일링 리스트를 사용하는 방법
LXC에 기여하기 위하여 패치나 패치셋을 직접 [lxc-devel 메일링 리스트](https://lists.linuxcontainers.org/listinfo/lxc-devel)로 보내도 됩니다.

`git format-patch`를 사용하여 메일로 보낼 수 있는 패치를 만들 수 있습니다.

메일 전송 프로그램에 "복사/붙여넣기" 할 때, 탭이나 행이 망가지지 않도록 주의하여야 합니다. (`git send-email` 또는 `git imap-send` 참고)

## pull-request를 사용하는 방법
저장소를 fork한 뒤, 브랜치를 만들어, 작업하신 사항을 commit하고 (반드시 -s와 함께!), 푸시하시면 됩니다.

그리고 나서 [github 설명서 - pull request 하는 법](https://help.github.com/articles/creating-a-pull-request/) 대로 진행하시면 됩니다.
