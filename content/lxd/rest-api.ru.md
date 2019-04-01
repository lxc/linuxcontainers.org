

# API LXD

На данный момент LXD реализует только одну версию API, обозначаемую как "1.0".

Информация по API может быть найдена на:
[https://github.com/lxc/lxd/blob/master/doc/rest-api.md](https://github.com/lxc/lxd/blob/master/doc/rest-api.md)

## Обратная совместимость

Как только API отмечено как "стабильное", как в случае с версией API 1.0, мы соглашаемся не вносить в него никаких обратно несовместимых изменений.
Тем не менее, мы будем дополнять API, отмечая версии идентификатором для удобства новых пользователей.

Это значит, что новые пользователи смогут отследить, поддерживает ли выбранный сервер нужную возможность, и решить вопрос с ее использованием.

## Клиенты

Следующие клиенты разработаны проектом LXD.

* Go [lxd.Client](https://github.com/lxc/lxd/blob/master/client.go)
* Python [pylxd](https://github.com/lxc/pylxd)

Эти клиенты были добавлены третьими сторонами.  Они
никогда не поддерживались и не продвигались проектом LXD project.

* Ruby: [Hyperkit](http://jeffshantz.github.io/hyperkit)
* Node.js:
  * [ts-lxd](http://github.com/trufflesuite/ts-lxd)
  * [node-lxd](http://github.com/alandoherty/node-lxd)
* Haskell: [lxd-client](https://hackage.haskell.org/package/lxd-client)
