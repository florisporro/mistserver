enum Commands{
  CM_ERR,///<Empty Constructor for map

  CM_OCC,///<Overall Connection Connect
  CM_OCD,///<Overall Connection Disconnect
//  CM_OSG,///<Overall Statistics Get SELECTOR
//  CM_OSG_U,///<Overall Statistics Get Users
//  CM_OSG_T,///<Overall Statistics Get Throughput

  CM_SCA,///<Servers Config Add
  CM_SCR///<Servers Config Remove
  CM_SCS///<Servers Config Set SELECTOR
  CM_SCS_N///<Servers Config Set Name
  CM_SCS_A///<Servers Config Set Name
  CM_SCS_S///<Servers Config Set Name
  CM_SCS_H///<Servers Config Set Name
  CM_SCS_R///<Servers Config Set Name
  CM_SCG///<Servers Config Get SELECTOR
  CM_SCG_N///<Servers Config Get Name
  CM_SCG_A///<Servers Config Get Name
  CM_SCG_S///<Servers Config Get Name
  CM_SCG_H///<Servers Config Get Name
  CM_SCG_R///<Servers Config Get Name
};


#include <string>
#include <sstream>
#include <deque>
#include <vector>
#include <map>
#include <cstdlib>
#include <cstdio>
#include <algorithm>
#include "../../../util/ddv_socket.h"
#include "../../../util/md5.h"
#include "server.h"

#define TESTUSER_ID "5"
#define TESTUSER_PASS "Chocokoekjes"
#define TESTUSER_STRING "DDVTECH"

class Gearbox_Server {
  public:
    Gearbox_Server( DDV::Socket Connection );
    ~Gearbox_Server( );

    void Handshake( );
    void HandleConnection( );

  private:
    void InitializeMap( );

    void WriteReturn( );
    std::string Encode( std::string input );
    std::string Decode( std::string input );

    std::string GenerateRandomString( int charamount );
    std::string GetSingleCommand( );
    std::deque<std::string> GetParameters( std::string Cmd );

    int ServerConfigAdd( );
    bool ServerConfigRemove( std::string Index );

    std::map<int,Server>::iterator RetrieveServer( std::string Index );

    bool IsSrv;
    std::string RetVal;
    std::string RandomConnect;
    std::string RandomAuth;
    std::string XorPath;
    DDV::Socket conn;
    std::map<std::string,Commands> CommandMap;
    std::map<int,Server> ServerConfigs;
    std::map<int,std::string> ServerNames;
};//Gearbox Server Class