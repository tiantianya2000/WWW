<?php
$z[0]=Array("global","",381,407);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","(@me==\"\")? @me=\" class='current-menu-item' \":@me=\"\";",840,942);
$z[1][4]=array();
$z[1][4]['name']="typeid";
$z[1][4]['runphp']="yes";
$z[2]=Array("channelartlist","\r\n                      <li class='{dede:field.currentstyle/}'> <a href=\"{dede:field name='typeurl'/}\" class=\"menu1\">{dede:field name='typename'/} <i {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n                        @me=is_array(\$row)?'class=\"fa fa-caret-down\"':'style=\"display:none\"';\r\n                        {/dede:field}> </i> </a>\r\n                        <ul class=\"sub-menu dr-menu2\">\r\n                          {dede:channel type='son' noself='yes'}\r\n                          <li class=\"Lev2\"> <a href=\"[field:typeurl/]\" class=\"menu2\">[field:typename/]</a> </li>\r\n                          {/dede:channel}\r\n                        </ul>\r\n                      </li>\r\n                      ",1015,1960);
$z[2][4]=array();
$z[2][4]['typeid']="top";
$z[2][4]['row']="6";
$z[2][4]['currentstyle']="current-menu-item";

?>